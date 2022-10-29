import dynamic from "next/dynamic";

const CloverDynamic = dynamic(() => import("clover-mat"), {
  ssr: false,
});
export default function Home() {
  const id = "https://manifests.collections.yale.edu/ycba/obj/21168";
  return (
    <div>
      Rendering... {id}...
      <CloverDynamic id={id} />
    </div>
  );
}
