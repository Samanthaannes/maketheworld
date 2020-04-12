export const getConnectionId = ({ connection }) => connection && connection.connectionId

export const getCurrentRoomId = ({ connection, charactersInPlay }) => connection && connection.characterId && charactersInPlay && charactersInPlay[connection.characterId] && charactersInPlay[connection.characterId].RoomId

export const getCurrentName = ({ connection, charactersInPlay }) => connection && connection.characterId && charactersInPlay && charactersInPlay[connection.characterId] && charactersInPlay[connection.characterId].Name

export const getCharacterId = ({ connection }) => connection && connection.characterId