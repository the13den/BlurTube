const BLUR_LOCKED_FLAG="blurLocked",BLUR_ENABLED_FLAG="enabled",BLUR_LEVEL_FLAG="blurLevel",DEFAULT_BLUR="50";window.onload=()=>{let enableButton=document.getElementById("enable"),hoverLockContainer=document.querySelector(".hover-lock-container"),blurLevelText=document.getElementById("blur-level-text"),blurLevelNumber=document.getElementById("blur-level"),blurSlider=document.getElementById("slider"),enabled=!1;const getAndSetExtensionEnabled=()=>{chrome.storage.local.get("enabled",data=>{data.enabled?(enabled=!0,enableButton.checked=!0):(enabled=!1,enableButton.checked=!1)})},getAndSetBlurLevel=()=>{chrome.storage.local.get("blurLevel",data=>{if(!enabled)return blurSlider.style.display="none",blurLevelNumber.innerText="",blurLevelText.style.display="none";let blurLevel=data.blurLevel||"50";blurSlider.value=blurLevel,blurSlider.style.display="",blurLevelText.style.display="",blurLevelNumber.innerText=blurLevel})};enableButton.onclick=()=>{chrome.storage.local.set({enabled:!enabled}),enableButton.style.opacity=enabled?.5:1,getAndSetExtensionEnabled(),getAndSetBlurLevel()},blurSlider.oninput=()=>{let selectedBlurLevel=blurSlider.value;blurLevelNumber.innerText=selectedBlurLevel,chrome.storage.local.set({blurLevel:selectedBlurLevel})},getAndSetExtensionEnabled(),getAndSetBlurLevel()};