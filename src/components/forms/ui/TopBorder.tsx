import topBorder from "../../../assets/papel_picado_top_border.webp";
// adjust path depending on where TopBorder.tsx lives

function TopBorder() {
  return (
    <div
      className="h-8 w-full bg-repeat-x bg-top md:h-10"
      style={{
        backgroundImage: `url(${topBorder})`,
        backgroundSize: "360px auto",
      }}
      aria-hidden="true"
    />
  );
}

export default TopBorder;