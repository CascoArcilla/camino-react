import { useState } from "react";

export function TwitterFollowCard({
  children = "desconocido",
  userName = "desconocido",
  user = "desconocido",
  format,
  initialIsFollowy = false,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowy);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src="https://www.nacionflix.com/__export/1672187597553/sites/debate/img/2022/12/27/avatar-nickelodeon.jpg_976912859.jpg"
          alt="Avatar de avatar... Ang"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-infoUserName">{children}</strong>
          <span>{format(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
