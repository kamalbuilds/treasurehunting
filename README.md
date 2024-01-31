## Lightlink Treasure Quest: An Epic Blockchain Adventure with Perion XP points

This is a treasure hunting game, where your character earns XP points to unlock next levels of adventure and higher tier weapons.

Live Demo - https://treasurehuntingonlightlink.vercel.app/

## Demo video 
https://youtu.be/wxk3CVSJlz8

This is a treasure hunting game, where your character earns XP points to unlock next levels of adventure and higher tier weapons.

- Begin Your Legend

1. Forge Your Hero: Enter the realm by claiming your unique character NFT (ERC-1155), a digital artifact that signifies your presence and prowess in the world of Treasure Hunt.

2. Arm Yourself for Glory: Venture into the arcane Shop, where weapon NFTs (another ERC-1155 contract) await those daring enough to wield their power. 
Choose your weapon wisely, for it will be your companion in the quests to come.

3. Prepare for the Hunt: With weapon in hand, "equip" (stake) it in the legendary [TreasureHunt](./contracts/contracts/TreasureHunt.sol) contract. 

4. Here, your journey truly begins as you start to earn "XP points" (ERC-20 tokens),as you make your progress in the game.

5. Ascend Through the Ranks with your XP

Your valor and strategy will earn you XP points, the currency of progress and power in the game. These tokens are not just markers of your journey; they are keys to unlocking greater challenges and rewards. 

Use them to acquire higher-tier weapons, each imbued with the potential to amplify your rewards per block, marking your rise from a novice adventurer to a legendary treasure hunter.

```js
( 0 + 1 ) * 10_000_000_000_000 / 100_000_000_000_000_000 XP points per block.
```

Once you have earned enough XP tokens, you can use them to purchase higher tier weapons.

For instance, acquiring the "Level 2 Sword" (token ID `1`) for a mere 10 XP points elevates your rewards, leveraging the formula:

```js
(1 + 1)  10_000_000_000_000 / 100_000_000_000_000_000 XP points per block.
```

This intricate mechanism ensures that every action in the game is not just a step forward but a leap towards legendary status..


- List of contracts deployed

TreasureHunting Characters- https://pegasus.lightlink.io/token/0x838D9f03FC54A4C4f9111b966f66F464BAD74356?tab=inventory
XP points - https://pegasus.lightlink.io/address/0x2B5514C7dCfEED80382be814C84806cb0Ee386E9
Weapon NFTs - https://pegasus.lightlink.io/address/0xd51C958D419Ea8Ef3EdE1Ec3d3C12d4AC406A37B
Treasure Hunting Contract - https://pegasus.lightlink.io/address/0x2f800c2b30CE01539a665d778E1a21F847c355e5

- Blockscout interactions

1. Added private tag `TreasureHunting Contract` to  the Treasure Hunting Contract 0x2f800c2b30CE01539a665d778E1a21F847c355e5
2. Added public tags `xppoints`, `lightlinktreasurequest` to XP points contract  0x2B5514C7dCfEED80382be814C84806cb0Ee386E9
3. Added public tags `weaponnfts`, `lightlinktreasurequest` to XP points contract  0x2B5514C7dCfEED80382be814C84806cb0Ee386E9
4. Verified all the contracts using the api key from the explorer.