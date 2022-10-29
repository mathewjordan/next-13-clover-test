import dynamic from "next/dynamic";

const CloverDynamic = dynamic(() => import("@samvera/clover-iiif"), {
  ssr: false,
});
export default function Home() {
  const id = "https://manifests.collections.yale.edu/ycba/obj/21168";
  return (
    <div>
      Rendering... {id}... as v1.12.4-rc.0
      <CloverDynamic id={id} />
    </div>
  );
}
