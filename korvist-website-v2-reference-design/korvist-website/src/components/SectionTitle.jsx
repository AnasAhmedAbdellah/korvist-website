export default function SectionTitle({ label, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
