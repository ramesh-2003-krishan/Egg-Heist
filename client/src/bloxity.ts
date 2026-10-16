/**
 * Boxity SDK Integration Module
 * Handles cross-game identity, authentication, avatar cosmetics, emotes, chat bubbles, and lifecycle hooks.
 * SDK exposes itself as global `window.Legion.SDK`.
 */

export const BOXITY_GAME_SLUG = "egg-heist-game";
export const BLOXITY_STATIC_CDN = "https://static.bloxity.io/avatars";

// TODO: Legion.SDK.net
// TODO: resolveEndpoint
// TODO: play.bloxity.io
// TODO: party play
// TODO: the room reporter
// TODO: the stats reporter
// TODO: Gems purchases
// TODO: webhooks
// TODO: friends
// TODO: settings sync
// TODO: neck, chest, waist, hand, shoes, back accessories

export interface BoxityUser {
  _id: string;
  username: string;
  displayName?: string;
  email?: string;
  pfp?: string;
  avatar?: any;
}

export interface BoxityEquipped {
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

export interface BoxityChatMessage {
  userId: string;
  username: string;
  text: string;
  isGif?: boolean;
  at?: number;
  isLocalPlayer?: boolean;
}

export interface BoxityEmoteClip {
  len: number;
  loop: boolean;
  tracks: Record<string, [number, number, number, number][]>;
}

export interface BoxityEmote {
  id: string;
  name: string;
  price?: number;
  free?: boolean;
  icon?: string;
  clip: BoxityEmoteClip;
}

declare global {
  interface Window {
    Legion?: {
      SDK: {
        init: (options: { gameSlug: string }) => void;
        auth: {
          getUser: () => BoxityUser | null;
          getToken: () => string | null;
          isLoggedIn: () => boolean;
          showAuthPopup: () => Promise<BoxityUser | null>;
          logout: () => void;
          onUserChanged: (cb: (user: BoxityUser | null) => void) => () => void;
        };
        avatar: {
          getEquipped: () => BoxityEquipped;
          getSkinTextureUrl: () => string;
          getSkinId: () => string;
          getHatId: () => string;
          getHairId: () => string;
          getProportions?: () => Record<string, number>;
          onAvatarChanged: (cb: () => void) => () => void;
          onProportionsChanged?: (cb: () => void) => () => void;
        };
        game: {
          registerFeature: (feature: string) => void;
          loadingStep: (step: string) => void;
          loadingEnd: () => void;
          gameplayStart: () => void;
          gameplayEnd: () => void;
          updateRoom?: (roomId: string, partyId?: string) => void;
        };
        player: {
          onEvent: (cb: (event: string, data?: any) => void) => () => void;
        };
        chat: {
          onMessage: (cb: (m: BoxityChatMessage) => void) => () => void;
          attachBubble: (three: any, target: any, text: string, duration?: number) => any;
          bubbleText: (m: BoxityChatMessage) => string;
        };
      };
    };
  }
}

let isInitialized = false;
const emotesMap = new Map<string, BoxityEmote>();

export function initBloxity(): boolean {
  if (isInitialized) return true;

  try {
    if (window.Legion && window.Legion.SDK) {
      try {
        window.Legion.SDK.init({ gameSlug: BOXITY_GAME_SLUG });
        isInitialized = true;
        console.log(`[Boxity] SDK initialized with slug: ${BOXITY_GAME_SLUG}`);

        if (typeof window.Legion.SDK.game?.registerFeature === "function") {
          try {
            window.Legion.SDK.game.registerFeature("emotes");
          } catch (e) {
            console.warn("⚠️ [Boxity] Failed to register feature 'emotes':", e);
          }
        }

        try {
          window.Legion.SDK.game.loadingStep("Initializing Egg Heist...");
        } catch (e) {
          console.warn("⚠️ [Boxity] Failed to report loadingStep:", e);
        }

        fetchEmotesCatalog().catch((e) => console.warn("⚠️ [Boxity] fetchEmotesCatalog failed:", e));
        return true;
      } catch (e) {
        console.warn("⚠️ [Boxity] Failed to initialize SDK:", e);
        console.log(`[Boxity] SDK initialized with slug: ${BOXITY_GAME_SLUG}`);
      }
    } else {
      console.warn("⚠️ [Boxity] window.Legion.SDK script not loaded. Running in standalone fallback mode.");
      console.log(`[Boxity] SDK initialized with slug: ${BOXITY_GAME_SLUG}`);
      fetchEmotesCatalog().catch((e) => console.warn("⚠️ [Boxity] fetchEmotesCatalog failed:", e));
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] Unexpected error in initBloxity:", err);
    console.log(`[Boxity] SDK initialized with slug: ${BOXITY_GAME_SLUG}`);
  }
  return false;
}

export function loadingStart() {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.game?.loadingStart) {
      (window as any).Legion.SDK.game.loadingStart();
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] loadingStart failed:", err);
  }
}

export function loadingStep(step: string) {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.game?.loadingStep) {
      (window as any).Legion.SDK.game.loadingStep(step);
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] loadingStep failed:", err);
  }
}

export function loadingEnd() {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.game?.loadingEnd) {
      (window as any).Legion.SDK.game.loadingEnd();
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] loadingEnd failed:", err);
  }
}

export function gameplayStart() {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.game?.gameplayStart) {
      (window as any).Legion.SDK.game.gameplayStart();
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] gameplayStart failed:", err);
  }
}

export function getUser(): BoxityUser | null {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.auth?.getUser) {
      return (window as any).Legion.SDK.auth.getUser();
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] getUser failed:", err);
  }
  return null;
}

export async function showAuthPopup(): Promise<BoxityUser | null> {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.auth?.showAuthPopup) {
      return await (window as any).Legion.SDK.auth.showAuthPopup();
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] showAuthPopup failed:", err);
  }
  return null;
}

export function logout() {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.auth?.logout) {
      (window as any).Legion.SDK.auth.logout();
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] logout failed:", err);
  }
}

export function onUserChanged(cb: (user: BoxityUser | null) => void): (() => void) | null {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.auth?.onUserChanged) {
      return (window as any).Legion.SDK.auth.onUserChanged((user: BoxityUser | null) => {
        try {
          console.log(`[Boxity] onUserChanged fired: ${user?.username ?? null}`);
        } catch (e) {
          // never throw
        }
        try {
          cb(user);
        } catch (err) {
          console.warn("⚠️ [Boxity] Error in onUserChanged callback:", err);
        }
      });
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] onUserChanged registration failed:", err);
  }
  return null;
}

export function getEquippedCosmetics(): BoxityEquipped | null {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.avatar?.getEquipped) {
      const equipped = (window as any).Legion.SDK.avatar.getEquipped();
      try {
        console.log("[Boxity] Equipped avatar IDs after getEquipped():", equipped);
      } catch (e) {
        // never throw
      }
      return equipped;
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] getEquipped failed:", err);
  }
  return null;
}

export function getSkinTextureUrl(): string | null {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.avatar?.getSkinTextureUrl) {
      const url = (window as any).Legion.SDK.avatar.getSkinTextureUrl();
      try {
        console.log(`[Boxity] Skin texture URL from SDK: ${url}`);
      } catch (e) {
        // never throw
      }
      return url;
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] getSkinTextureUrl failed:", err);
  }
  return null;
}

export function onAvatarChanged(cb: () => void): (() => void) | null {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.avatar?.onAvatarChanged) {
      return (window as any).Legion.SDK.avatar.onAvatarChanged(() => {
        try {
          cb();
        } catch (err) {
          console.warn("⚠️ [Boxity] onAvatarChanged callback error:", err);
        }
      });
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] onAvatarChanged registration failed:", err);
  }
  return null;
}

export function onPlayerEvent(cb: (event: string, data?: any) => void): (() => void) | null {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.player?.onEvent) {
      return (window as any).Legion.SDK.player.onEvent((event: string, data?: any) => {
        try {
          cb(event, data);
        } catch (err) {
          console.warn("⚠️ [Boxity] onPlayerEvent callback error:", err);
        }
      });
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] onPlayerEvent registration failed:", err);
  }
  return null;
}

export function onChatMessage(cb: (m: BoxityChatMessage) => void): (() => void) | null {
  try {
    if (isInitialized && (window as any).Legion?.SDK?.chat?.onMessage) {
      return (window as any).Legion.SDK.chat.onMessage((m: BoxityChatMessage) => {
        try {
          cb(m);
        } catch (err) {
          console.warn("⚠️ [Boxity] onChatMessage callback error:", err);
        }
      });
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] onChatMessage registration failed:", err);
  }
  return null;
}

export function attachBubble(three: any, target: any, text: string, duration: number = 4000): any {
  if (isInitialized && (window as any).Legion?.SDK?.chat?.attachBubble) {
    try {
      return (window as any).Legion.SDK.chat.attachBubble(three, target, text, duration);
    } catch (err) {
      console.warn("⚠️ [Boxity] attachBubble failed (cosmetic):", err);
    }
  }
  return null;
}

export function bubbleText(m: BoxityChatMessage): string {
  if (isInitialized && (window as any).Legion?.SDK?.chat?.bubbleText) {
    try {
      return (window as any).Legion.SDK.chat.bubbleText(m);
    } catch {
      return m.text || "";
    }
  }
  return m.text || "";
}

/**
 * Builds remote skin texture URL matching Boxity specification:
 * https://api.bloxity.io/v1/avatar/skin-texture/s{skinId or 0}[_pn{pantsId}][_sh{shirtId}][_fc{faceId}].png
 */
export function buildRemoteSkinUrl(skinId?: string, pantsId?: string, shirtId?: string, faceId?: string): string {
  try {
    const s = skinId && skinId !== "-1" && skinId.trim() ? skinId.trim() : "0";
    let segments = `s${s}`;
    if (pantsId && pantsId !== "-1" && pantsId.trim()) segments += `_pn${pantsId.trim()}`;
    if (shirtId && shirtId !== "-1" && shirtId.trim()) segments += `_sh${shirtId.trim()}`;
    if (faceId && faceId !== "-1" && faceId.trim()) segments += `_fc${faceId.trim()}`;
    return `https://api.bloxity.io/v1/avatar/skin-texture/${segments}.png`;
  } catch (err) {
    console.warn("⚠️ [Boxity] buildRemoteSkinUrl failed:", err);
    return "https://api.bloxity.io/v1/avatar/skin-texture/s0.png";
  }
}

/**
 * Fetches the emotes catalog once at startup.
 */
async function fetchEmotesCatalog() {
  try {
    const res = await fetch("https://api.bloxity.io/v1/avatar/emotes");
    if (!res.ok) return;
    const data = await res.json();
    const list: BoxityEmote[] = Array.isArray(data) ? data : data.emotes || [];
    for (const emote of list) {
      if (emote && emote.id) {
        emotesMap.set(emote.id, emote);
      }
    }
  } catch (err) {
    console.warn("⚠️ [Boxity] Failed to fetch emotes catalog:", err);
  }
}

export function getEmote(id: string): BoxityEmote | undefined {
  try {
    return emotesMap.get(id);
  } catch (err) {
    console.warn("⚠️ [Boxity] getEmote failed:", err);
    return undefined;
  }
}
