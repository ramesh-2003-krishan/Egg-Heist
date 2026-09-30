/**
 * Bloxity SDK Integration Module
 * Handles cross-game identity, authentication, avatar cosmetics, and game lifecycle hooks.
 * SDK exposes itself as global `window.Legion.SDK`.
 */

export const BLOXITY_GAME_SLUG = "egg-heist";
export const BLOXITY_STATIC_CDN = "https://static.bloxity.io/avatars";

declare global {
  interface Window {
    Legion?: {
      SDK: {
        init: (options: { gameSlug: string }) => void;
        auth: {
          getUser: () => BloxityUser | null;
          getToken: () => string | null;
          isLoggedIn: () => boolean;
          showAuthPopup: () => Promise<BloxityUser | null>;
          logout: () => void;
          onUserChanged: (cb: (user: BloxityUser | null) => void) => () => void;
        };
        avatar: {
          getEquipped: () => BloxityEquipped;
          getSkinTextureUrl: () => string;
          getSkinId: () => string;
          getHatId: () => string;
          getHairId: () => string;
          getProportions: () => Record<string, number>;
          onAvatarChanged: (cb: () => void) => () => void;
          onProportionsChanged: (cb: () => void) => () => void;
        };
        game: {
          loadingStep: (step: string) => void;
          loadingEnd: () => void;
          gameplayStart: () => void;
          gameplayEnd: () => void;
          updateRoom: (roomId: string, partyId?: string) => void;
        };
        // TODO: Bux purchases integration (Legion.SDK.bux)
        // TODO: Webhooks integration (Server-to-server webhook endpoint)
        // TODO: Social integration (Legion.SDK.social)
        // TODO: Settings menu integration (Legion.SDK.settings)
      };
    };
  }
}

export interface BloxityUser {
  _id: string;
  username: string;
  displayName?: string;
  email?: string;
  pfp?: string;
  avatar?: any;
}

export interface BloxityEquipped {
  hatId?: string;
  backId?: string;
  skinId?: string;
  headId?: string;
  armLId?: string;
  armRId?: string;
  legLId?: string;
  legRId?: string;
  torsoId?: string;
  hairId?: string;
  maskId?: string;
  neckId?: string;
  chestId?: string;
  waistId?: string;
  handId?: string;
  shoesId?: string;
  faceId?: string;
  pantsId?: string;
  shirtId?: string;
}

let isInitialized = false;

export function initBloxity(): boolean {
  if (isInitialized) return true;

  if (window.Legion && window.Legion.SDK) {
    try {
      window.Legion.SDK.init({ gameSlug: BLOXITY_GAME_SLUG });
      isInitialized = true;
      console.log(`✅ [Bloxity] SDK initialized with slug: '${BLOXITY_GAME_SLUG}'`);

      window.Legion.SDK.game.loadingStep("Initializing Egg Heist...");
      return true;
    } catch (e) {
      console.warn("⚠️ [Bloxity] Failed to initialize SDK:", e);
    }
  } else {
    console.warn("⚠️ [Bloxity] window.Legion.SDK script not loaded. Running in standalone fallback mode.");
  }
  return false;
}

export function loadingEnd() {
  if (isInitialized && window.Legion?.SDK?.game) {
    window.Legion.SDK.game.loadingEnd();
  }
}

export function gameplayStart() {
  if (isInitialized && window.Legion?.SDK?.game) {
    window.Legion.SDK.game.gameplayStart();
  }
}

export function getUser(): BloxityUser | null {
  if (isInitialized && window.Legion?.SDK?.auth) {
    return window.Legion.SDK.auth.getUser();
  }
  return null;
}

export async function showAuthPopup(): Promise<BloxityUser | null> {
  if (isInitialized && window.Legion?.SDK?.auth) {
    return await window.Legion.SDK.auth.showAuthPopup();
  }
  return null;
}

export function logout() {
  if (isInitialized && window.Legion?.SDK?.auth) {
    window.Legion.SDK.auth.logout();
  }
}

export function onUserChanged(cb: (user: BloxityUser | null) => void): (() => void) | null {
  if (isInitialized && window.Legion?.SDK?.auth) {
    return window.Legion.SDK.auth.onUserChanged(cb);
  }
  return null;
}

export function getEquippedCosmetics(): BloxityEquipped | null {
  if (isInitialized && window.Legion?.SDK?.avatar) {
    return window.Legion.SDK.avatar.getEquipped();
  }
  return null;
}

export function getSkinTextureUrl(): string | null {
  if (isInitialized && window.Legion?.SDK?.avatar) {
    return window.Legion.SDK.avatar.getSkinTextureUrl();
  }
  return null;
}

export function onAvatarChanged(cb: () => void): (() => void) | null {
  if (isInitialized && window.Legion?.SDK?.avatar) {
    return window.Legion.SDK.avatar.onAvatarChanged(cb);
  }
  return null;
}

// TODO: Implement Bloxity Bux Purchases in future phase (Legion.SDK.bux)
// TODO: Implement Bloxity Webhooks backend endpoint (Server-to-server webhook)
// TODO: Implement Bloxity Social & Friend Invites (Legion.SDK.social)
// TODO: Implement Bloxity Settings Menu Listeners (Legion.SDK.settings)
