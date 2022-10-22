export interface Encounter {
    description: string;
    dm_description: string;
    roll?: number;
    encounter_type?: EncounterTypes;
}

export enum EncounterTypes {
    low = "low",
    medium = "medium",
    high = "high",
    lucky = "lucky"
}