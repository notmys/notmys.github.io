-- verifiedusers.lua
local verifiedPlayers = {
    [9247735263] = true,
    [7646924628] = true,
    [5204467582] = true,
    [8432632970] = true,
}
return function(player, _)
    if verifiedPlayers[player.UserId] then
        return player.DisplayName .. utf8.char(0xE000)
    else
        return player.DisplayName
    end
end
