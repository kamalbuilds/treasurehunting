import { ThirdwebNftMedia, useAddress, useNFT } from "@thirdweb-dev/react";
import { EditionDrop, NFT, SmartContract } from "@thirdweb-dev/sdk";
import React, { useEffect, useState } from "react";
import ContractMappingResponse from "../types/ContractMappingResponse";
import GameplayAnimation from "./GameplayAnimation";
import styles from "../styles/Home.module.css";
import Image from "next/image";

type Props = {
  miningContract: SmartContract<any>;
  characterContract: EditionDrop;
  weaponContract: EditionDrop;
};

/**
 * This component shows the:
 * - Currently equipped character (right now there is just one (token ID 0))
 * - Currently equipped character's weapon
 */
export default function CurrentGear({
  miningContract,
  characterContract,
  weaponContract,
}: Props) {
  const address = useAddress();

  const { data: playerNft } = useNFT(characterContract, 0);
  const [weapon, setWeapon] = useState<NFT>();
  const [heroY, setHeroY] = useState(100);
  const [heroX, setHeroX] = useState(window.innerWidth / 2); 
  useEffect(() => {
    (async () => {
      if (!address) return;

      const p = (await miningContract.call("playerWeapon", [
        address,
      ])) as ContractMappingResponse;

      // Now we have the tokenId of the equipped weapon, if there is one, fetch the metadata for it
      if (p.isData) {
        const weaponMetadata = await weaponContract.get(p.value);
        console.log("weaponMetadata", weaponMetadata);
        setWeapon(weaponMetadata);
      }
    })();
  }, [address, miningContract, weaponContract]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp" && heroY > 0) {
        setHeroY((prevY) => prevY - 10);
      } else if (event.key === "ArrowDown" && heroY < window.innerHeight - 64) {
        setHeroY((prevY) => prevY + 10);
      } else if (event.key === "ArrowLeft" && heroX > 0) {
        setHeroX((prevX) => prevX - 10);
      } else if (event.key === "ArrowRight" && heroX < window.innerWidth - 64) {
        setHeroX((prevX) => prevX + 10);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [heroY, heroX]);

    
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className={`${styles.noGapTop} `}>Equipped Items</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* Currently equipped player */}
        <div style={{ outline: "1px solid grey", borderRadius: 16 }}>
          {playerNft && (
            <ThirdwebNftMedia metadata={playerNft?.metadata} height={"64"} />
          )}
        </div>
        {/* Currently equipped weapon */}
        <div
          style={{ outline: "1px solid grey", borderRadius: 16, marginLeft: 8 }}
        >
          {weapon && (
            // @ts-ignore
            <ThirdwebNftMedia metadata={weapon.metadata} height={"64"} />
          )}
        </div>
      </div>

      {/* Gameplay Animation */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          // marginTop: 24,
        }}
      >
         <div style={{ position: "relative", top: `${heroY}px` }}>
        <Image src="/captaincool.gif" height={64} width={64} alt="character-mining" />
        </div>
        <GameplayAnimation weapon={weapon}  />
      </div>
    </div>
  );
}
