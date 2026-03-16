const links = {
  whatsapp: "https://wa.me/message/QF4YXSXDZ3PDJ1",
  catalogo: "#",
  visita: "https://docs.google.com/forms/d/e/1FAIpQLSfux2jwFEpjWIqPMi_yYLxOVFYODmSTmLYVbRU9dZbmLpj0Mw/viewform",
  instagram: "https://www.instagram.com/mundinhokidsrp/"
};

document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn = document.querySelector(".whatsapp");
  const catalogoBtn = document.querySelector(".catalogo");
  const visitaBtn = document.querySelector(".visita");
  const instagramBtn = document.querySelector(".instagram");

  if (whatsappBtn) whatsappBtn.href = links.whatsapp;
  if (catalogoBtn) catalogoBtn.href = links.catalogo;
  if (visitaBtn) visitaBtn.href = links.visita;
  if (instagramBtn) instagramBtn.href = links.instagram;

  const botoes = document.querySelectorAll(".link-btn");

  botoes.forEach((botao) => {
    botao.addEventListener("mousemove", (e) => {
      const rect = botao.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      botao.style.backgroundPosition = `${x / 5}px ${y / 5}px`;
    });
  });
});