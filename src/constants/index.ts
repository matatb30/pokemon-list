export const QUERY_KEY = {
	LIST_POKEMON : 'LIST_POKEMON',
	LIST_POKEMON_TYPE : 'LIST_POKEMON_TYPE',
	POKEMON: 'POKEMON',
}

export enum POKEMON_TYPE {
	NORMAL = 'normal',
	FIGHTING = 'fighting',
	FLYING = 'flying',
	POISON = 'poison',
	GROUND = 'ground',
	ROCK = 'rock',
	BUG = 'bug',
	GHOST = 'ghost',
	STEEL = 'steel',
	FIRE = 'fire',
	WATER = 'water',
	GRASS= 'grass',
	ELECTRIC = 'electric',
	PSYCHIC = 'psychic',
	ICE = 'ice',
	DRAGON = 'dragon',
	DARK = 'dark',
	FAIRY = 'fairy',
	UNKNOWN = 'unknown',
	SHADOW = 'shadow',
}

export const CONSTANTS = {
	LIMIT_DEFAULT: 20,
	TYPE_DEFAULT: POKEMON_TYPE.UNKNOWN,
	HTML_CODE_IMAGE_NOT_FOUND: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzAwcHgiIHdpZHRoPSIzMDBweCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSItMzAwIC0zMDAgNjAwIDYwMCIgZm9udC1mYW1pbHk9IkJpdHN0cmVhbSBWZXJhIFNhbnMsTGliZXJhdGlvbiBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI3MiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgPGNpcmNsZSBzdHJva2U9IiNBQUEiIHN0cm9rZS13aWR0aD0iMTAiIHI9IjI4MCIgZmlsbD0iI0ZGRiIvPgogIDx0ZXh0IHN0eWxlPSJmaWxsOiM0NDQ7Ij4KICAgIDx0c3BhbiB4PSIwIiB5PSItOCI+Tk8gSU1BR0U8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSI4MCI+QVZBSUxBQkxFPC90c3Bhbj4KICA8L3RleHQ+Cjwvc3ZnPg=='
}

export const COLOR_POKEMON_TYPE = {
	[POKEMON_TYPE.NORMAL]: '#A1A1A1',
	[POKEMON_TYPE.FIGHTING]: '#BBD4E9',
	[POKEMON_TYPE.POISON]: '#73C2DA',
	[POKEMON_TYPE.FLYING]: '#36C7BD',
	[POKEMON_TYPE.GROUND]: '#7E5231',
	[POKEMON_TYPE.ROCK]: '#474642',
	[POKEMON_TYPE.BUG]: '#7ED364',
	[POKEMON_TYPE.GHOST]: '#BB3436',
	[POKEMON_TYPE.STEEL]: '#C05846',
	[POKEMON_TYPE.FIRE]: '#B18260',
	[POKEMON_TYPE.WATER]: '#436E7A',
	[POKEMON_TYPE.GRASS]: '#376370',
	[POKEMON_TYPE.ELECTRIC]: '#F8D56B',
	[POKEMON_TYPE.PSYCHIC]: '#DA3748',
	[POKEMON_TYPE.ICE]: '#6DADAB',
	[POKEMON_TYPE.DRAGON]: '#A8EBAD',
	[POKEMON_TYPE.DARK]: '#F8DE86',
	[POKEMON_TYPE.FAIRY]: '#5C5496',
	[POKEMON_TYPE.UNKNOWN]: '#BLACK',
	[POKEMON_TYPE.SHADOW]: '#B3909C',
}
