export function PostCard(posts) {
  let {date, slug, id, title, _embedded } = posts;
  let dataFormat = new Date(date).toLocaleDateString();
  const urlPosts = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : "app/assets/perfil_github.png";

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) return false;
    localStorage.setItem("wpPostId", e.target.dataset.id);
  });

  return `
    <article class="post-card">
        <img src="${urlPosts}" alt="${title.rendered}" />
        <h2>${title.rendered}</h2>
        <p>
        <time datetime="${date}">${dataFormat}</time>
        <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
        </p>
    </article>
    `;
}
