export default function Card({
  id, title, client, date, infos, infosFr, link,
  imageSize = 70
}) {
  return (
    <>
      <h3>{title}</h3>
      <img 
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Client / Projet:</b> {client}
        </li>
        <li>
          <b>Abstract: {infos}</b>
        </li>
        <li>
          <b>Résumé mission: {infosFr}</b>
        </li>
        <li>{date}</li>
        <button>
          <a href={link}>Lien</a>
        </button>
      </ul>
    </>
  )
}
