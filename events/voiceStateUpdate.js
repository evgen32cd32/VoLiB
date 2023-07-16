const { Events } = require('discord.js');
const { ClientState } = require('../core/clientState.js')

module.exports = {
	name: Events.VoiceStateUpdate,
	execute(oldVoiceState, newVoiceState) {
        if (!oldVoiceState.channelId && oldVoiceState.client.state == ClientState.IDLE) {
            console.log('Staring')
            oldVoiceState.client.state = ClientState.LISTENING
        }
        if (!newVoiceState.channelId && newVoiceState.client.state == ClientState.LISTENING) {
            console.log('Finishing')
            newVoiceState.client.state = ClientState.IDLE
        }
    },
};