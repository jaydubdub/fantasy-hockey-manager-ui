export type RosterPlayer = {
    url: string;
    name: string;
    year: string;
    round?: string;
    overall?: number;
    position: string;
}

export type RosterPlayerGp = {
    draftYear: string;
    gamesPlayed: number;
    gamesRemaining: number;
    name: string;
    playerUrl: string;
    position: string;
}