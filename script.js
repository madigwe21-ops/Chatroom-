document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("card");
  const viewDetailsBtn = document.getElementById("view-details-btn");
  const hideDetailsBtn = document.getElementById("hide-details-btn");
  
  // Check local element contexts before applying triggers (handles iframe setups smoothly)
  const frontFace = document.querySelector(".card-face.front");
  const backFace = document.querySelector(".card-face.back");
  
  if (viewDetailsBtn && hideDetailsBtn) {
    // 1. Flip Forward Trigger Sequence -> Activates bottom sweep
    viewDetailsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      card.classList.add("flipped");
      
      backFace.classList.remove("sweep-down", "sweep-up");
      
      // Synchronize illumination sweep onset midway through transition rotation sequence
      setTimeout(() => {
        backFace.classList.add("sweep-down");
      }, 220);
    });
    
    // 2. Hide Details Trigger Sequence -> Activates upward sweep
    hideDetailsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      card.classList.remove("flipped");
      
      frontFace.classList.remove("sweep-down", "sweep-up");
      
      // Synchronize backward edge illumination path midway
      setTimeout(() => {
        frontFace.classList.add("sweep-up");
      }, 220);
    });
  }
});