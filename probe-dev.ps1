Set-Location 'C:\Users\shrey\Downloads\indieos'

# Start dev server as a background job
$job = Start-Job -ScriptBlock {
    Set-Location 'C:\Users\shrey\Downloads\indieos'
    & pnpm.cmd run dev 2>&1
}

Write-Output "Dev server job started, waiting 50s for warm-up..."
Start-Sleep 50

$resp = $null
try {
    $resp = Invoke-WebRequest -Uri 'http://localhost:3000' -UseBasicParsing -TimeoutSec 8
} catch {
    Write-Output "HTTP_ERROR: $_"
}

if ($resp) {
    Write-Output "STATUS: $($resp.StatusCode)"
    $b = $resp.Content
    if ($b -match 'IndieOS') {
        Write-Output 'FOUND: IndieOS'
    } else {
        Write-Output 'MISSING: IndieOS'
    }
    if ($b -match 'Build a small software business you control') {
        Write-Output 'FOUND: H1'
    } else {
        Write-Output 'MISSING: H1'
    }
    # Print first 2000 chars of HTML for inspection
    Write-Output "--- HTML SNIPPET ---"
    Write-Output $b.Substring(0, [Math]::Min(2000, $b.Length))
}

# Print job output for diagnostics
Write-Output "--- JOB OUTPUT ---"
Receive-Job $job

# Cleanup
Stop-Job $job
Remove-Job $job
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Write-Output "Done."
