"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

export const BOOKMARKS_STORAGE_KEY = "indieos-saved-articles";
const BOOKMARKS_CUSTOM_EVENT = "indieos-bookmarks-changed";

export interface BookmarksContextValue {
  savedArticleIds: string[];
  isLoaded: boolean;
  savedCount: number;
  isSaved: (articleId: string) => boolean;
  toggleSave: (articleId: string) => void;
  saveArticle: (articleId: string) => void;
  removeArticle: (articleId: string) => void;
  clearAll: () => void;
  storageError: string | null;
  clearStorageError: () => void;
}

const BookmarksContext = createContext<BookmarksContextValue | null>(null);

function safelyReadStorage(): { ids: string[]; error: string | null } {
  if (typeof window === "undefined") {
    return { ids: [], error: null };
  }

  try {
    const raw = window.localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (!raw) {
      return { ids: [], error: null };
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return { ids: [], error: "Saved articles storage contained invalid data format." };
    }

    const validIds = parsed.filter(
      (id): id is string => typeof id === "string" && id.trim().length > 0
    );
    // Deduplicate
    return { ids: Array.from(new Set(validIds)), error: null };
  } catch (err) {
    return {
      ids: [],
      error:
        err instanceof Error
          ? err.message
          : "Unable to access browser localStorage.",
    };
  }
}

function safelyWriteStorage(ids: string[]): { success: boolean; error: string | null } {
  if (typeof window === "undefined") {
    return { success: false, error: null };
  }

  try {
    window.localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(ids));
    return { success: true, error: null };
  } catch (err) {
    return {
      success: false,
      error:
        err instanceof Error
          ? err.message
          : "Unable to write to browser localStorage.",
    };
  }
}

export function BookmarksProvider({ children }: { children: React.ReactNode }) {
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [storageError, setStorageError] = useState<string | null>(null);

  // Initialize client-side state after mount to avoid hydration mismatch
  useEffect(() => {
    const { ids, error } = safelyReadStorage();
    setSavedArticleIds(ids);
    if (error) {
      setStorageError(error);
    }
    setIsLoaded(true);
  }, []);

  // Synchronize across tabs via 'storage' event, and within same tab via custom event
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleStorageEvent = (event: StorageEvent) => {
      if (event.key === BOOKMARKS_STORAGE_KEY) {
        const { ids, error } = safelyReadStorage();
        setSavedArticleIds(ids);
        if (error) setStorageError(error);
      }
    };

    const handleCustomEvent = () => {
      const { ids, error } = safelyReadStorage();
      setSavedArticleIds(ids);
      if (error) setStorageError(error);
    };

    window.addEventListener("storage", handleStorageEvent);
    window.addEventListener(BOOKMARKS_CUSTOM_EVENT, handleCustomEvent);

    return () => {
      window.removeEventListener("storage", handleStorageEvent);
      window.removeEventListener(BOOKMARKS_CUSTOM_EVENT, handleCustomEvent);
    };
  }, []);

  const notifyUpdate = useCallback(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event(BOOKMARKS_CUSTOM_EVENT));
    }
  }, []);

  const saveArticle = useCallback(
    (articleId: string) => {
      if (!articleId) return;
      setSavedArticleIds((prev) => {
        if (prev.includes(articleId)) return prev;
        const next = [...prev, articleId];
        const { error } = safelyWriteStorage(next);
        if (error) setStorageError(error);
        notifyUpdate();
        return next;
      });
    },
    [notifyUpdate]
  );

  const removeArticle = useCallback(
    (articleId: string) => {
      if (!articleId) return;
      setSavedArticleIds((prev) => {
        if (!prev.includes(articleId)) return prev;
        const next = prev.filter((id) => id !== articleId);
        const { error } = safelyWriteStorage(next);
        if (error) setStorageError(error);
        notifyUpdate();
        return next;
      });
    },
    [notifyUpdate]
  );

  const toggleSave = useCallback(
    (articleId: string) => {
      if (!articleId) return;
      setSavedArticleIds((prev) => {
        const isCurrentlySaved = prev.includes(articleId);
        const next = isCurrentlySaved
          ? prev.filter((id) => id !== articleId)
          : [...prev, articleId];
        const { error } = safelyWriteStorage(next);
        if (error) setStorageError(error);
        notifyUpdate();
        return next;
      });
    },
    [notifyUpdate]
  );

  const clearAll = useCallback(() => {
    setSavedArticleIds([]);
    safelyWriteStorage([]);
    notifyUpdate();
  }, [notifyUpdate]);

  const clearStorageError = useCallback(() => {
    setStorageError(null);
  }, []);

  const isSaved = useCallback(
    (articleId: string) => {
      return savedArticleIds.includes(articleId);
    },
    [savedArticleIds]
  );

  const value = useMemo<BookmarksContextValue>(
    () => ({
      savedArticleIds,
      isLoaded,
      savedCount: savedArticleIds.length,
      isSaved,
      toggleSave,
      saveArticle,
      removeArticle,
      clearAll,
      storageError,
      clearStorageError,
    }),
    [
      savedArticleIds,
      isLoaded,
      isSaved,
      toggleSave,
      saveArticle,
      removeArticle,
      clearAll,
      storageError,
      clearStorageError,
    ]
  );

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks(): BookmarksContextValue {
  const context = useContext(BookmarksContext);
  if (!context) {
    // Return a safe fallback if used outside provider
    return {
      savedArticleIds: [],
      isLoaded: false,
      savedCount: 0,
      isSaved: () => false,
      toggleSave: () => {},
      saveArticle: () => {},
      removeArticle: () => {},
      clearAll: () => {},
      storageError: null,
      clearStorageError: () => {},
    };
  }
  return context;
}
