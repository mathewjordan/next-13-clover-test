import dynamic from "next/dynamic";

const CloverIIIF = dynamic(() => import("@samvera/clover-iiif"), {
  ssr: false,
});
export default function Home() {
  const id = "https://manifests.collections.yale.edu/ycba/obj/21168";
  return (
    <div>
      <CloverIIIF id={id} />
    </div>
  );
}
