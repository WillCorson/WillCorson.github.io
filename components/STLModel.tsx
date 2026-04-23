import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three-stdlib";

export function STLModel({ url }: { url: string }) {
const geometry = useLoader(STLLoader, url);
return (
  <mesh geometry={geometry}>
    {/* You can change the color/material of the STL here */}
    <meshStandardMaterial color="#94a3b8" roughness={0.4} metalness={0.6} />
  </mesh>
)}