import { useNFTs } from "@thirdweb-dev/react";
import { EditionDrop } from "@thirdweb-dev/sdk";
import React from "react";
import styles from "../styles/Home.module.css";
import ShopItem from "./ShopItem";

type Props = {
  weaponContract: EditionDrop;
};

/**
 * This component shows the:
 * - All of the available weapons from the edition drop and their price.
 */
export default function Shop({ weaponContract }: Props) {
  const { data: availableWeaponss } = useNFTs(weaponContract);

  return (
    <>
      <div className={styles.nftBoxGrid}>
        {availableWeaponss?.map((p) => (
          <ShopItem
            weaponContract={weaponContract}
            item={p}
            key={p.metadata.id.toString()}
          />
        ))}
      </div>
    </>
  );
}
