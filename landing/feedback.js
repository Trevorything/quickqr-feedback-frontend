window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("order");

  if (!orderId) {
    document.getElementById("form-container").innerHTML = "<p>Invalid or missing order ID.</p>";
    return;
  }

  document.getElementById("orderId").value = orderId;

  const form = document.getElementById("feedback-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      orderId: document.getElementById("orderId").value,
      customerRating: parseInt(document.getElementById("customerRating").value),
      comments: document.getElementById("comments").value,
    };

    const response = await fetch("https://<your-vercel-app>.vercel.app/api/submitFeedback", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});
    const result = await response.text();
    document.getElementById("response").textContent = result;
    form.reset();
  });
};
