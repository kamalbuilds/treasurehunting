import {
  ConnectWallet,
  useAddress,
  useContract,
  useMetamask,
} from "@thirdweb-dev/react";
import React from "react";
import CurrentGear from "../components/CurrentGear";
import LoadingSection from "../components/LoadingSection";
import OwnedGear from "../components/OwnedGear";
import Rewards from "../components/Rewards";
import Shop from "../components/Shop";
import {
  CHARACTER_EDITION_ADDRESS,
  XP_POINTS_ADDRESS,
  TREASURY_CONTRACT_ADDRESS,
  WEAPON_EDITION_ADDRESS,
} from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function Play() {
  const address = useAddress();

  const { contract: miningContract } = useContract(TREASURY_CONTRACT_ADDRESS);
  const { contract: characterContract } = useContract(
    CHARACTER_EDITION_ADDRESS,
    "edition-drop"
  );
  const { contract: weaponContract } = useContract(
    WEAPON_EDITION_ADDRESS,
    "edition-drop"
  );
  const { contract: tokenContract } = useContract(XP_POINTS_ADDRESS, "token");

  if (!address) {
    return (
      <div className={styles.container}>
        <ConnectWallet theme="dark" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {miningContract &&
      characterContract &&
      tokenContract &&
      weaponContract ? (
        <div className={styles.mainSection}>
          <CurrentGear
            miningContract={miningContract}
            characterContract={characterContract}
            weaponContract={weaponContract}
          />
          <Rewards
            miningContract={miningContract}
            tokenContract={tokenContract}
          />
        </div>
      ) : (
        <LoadingSection />
      )}

      <hr className={`${styles.divider} ${styles.bigSpacerTop}`} />

      {weaponContract && miningContract ? (
        <>
          <h2 className={`${styles.noGapTop} ${styles.noGapBottom}`}>
            Your Owned Weapons
          </h2>
          <div
            style={{
              width: "100%",
              minHeight: "10rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <OwnedGear
              weaponContract={weaponContract}
              miningContract={miningContract}
            />
          </div>
        </>
      ) : (
        <LoadingSection />
      )}

      <hr className={`${styles.divider} ${styles.bigSpacerTop}`} /> 

      {weaponContract && tokenContract ? (
        <>
          <h2 className={`${styles.noGapTop} ${styles.noGapBottom}`}>Shop</h2>
          <div
            style={{
              width: "100%",
              minHeight: "10rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Shop weaponContract={weaponContract} />
          </div>
        </>
      ) : (
        <LoadingSection />
      )}
    </div>
  );
}
