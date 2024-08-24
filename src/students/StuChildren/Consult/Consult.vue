<template>
  <div class="chat-container" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
    <div class="chat-messages">
      <div v-for="message in messages" :key="message.id" class="message">
        <div v-if="message.user === 'user'" class="user-message">
          <span>{{ message.text }}</span>
        </div>
        <div v-else-if="message.user === 'bot'" class="bot-message">
          <img :src="botAvatar" alt="小薇" class="bot-avatar" />
          <span>{{ message.text }}</span>
        </div>
      </div>
    </div>
    <div class="input-area">
      <input v-model="inputText" placeholder="请输入问题..." @keydown.enter="sendMessage" />
      <button @click="sendMessage">发送</button>
    </div>
    <div class="preset-questions">
      <button v-for="preset in presets" :key="preset.id" @click="sendPreset(preset)">
        {{ preset.text }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      inputText: '',
      messages: [],
      presets: [
        { id: 1, text: '我怎么注册账号？' },
        { id: 2, text: '如何修改密码？' },
        { id: 3, text: '如何联系人工客服？' },
        { id: 4, text: '如何查询宿舍信息?' },
      ],
      botUrl: 'https://your-bot-api-url.com/api/chat',
      backgroundImage: 'https://img.zcool.cn/community/01217d5e44dea5a80121651826b02a.jpg@1280w_1l_2o_100sh.jpg',
      botAvatar: 'https://img.zcool.cn/community/031e0aa5805f167a84a0d304f1c392a.jpg' // 替换为实际的机器人头像 URL
    };
  },
  methods: {
    sendMessage() {
      if (this.inputText.trim() === '') return;
      this.messages.push({ id: Date.now(), user: 'user', text: this.inputText });
      this.inputText = '';
      this.fetchBotResponse(this.messages[this.messages.length - 1].text);
    },
    sendPreset(preset) {
      this.messages.push({ id: Date.now(), user: 'user', text: preset.text });
      this.fetchBotResponse(preset.text);
    },
    fetchBotResponse(userInput) {
      axios.post(this.botUrl, { userInput })
          .then(response => {
            const botResponse = response.data.response;
            this.messages.push({ id: Date.now(), user: 'bot', text: botResponse });
          })
          .catch(error => {
            console.error('Error fetching bot response:', error);
            this.messages.push({ id: Date.now(), user: 'bot', text: '对不起，我暂时无法回答这个问题。' });
          });
    }
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2vmin;
}

.chat-messages {
  flex-grow: 1;
  height: 40vmin;
  overflow-y: auto;
  margin: 0 5vmin 0 5vmin;
}

.message {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-message {
  font-size: 20px;
  background-color: #b0e0e6;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  margin-right: auto;
  max-width: 70%;
}

.bot-message {
  font-size: 20px;
  background-color: #f0f0f0;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  margin-left: auto;
  max-width: 70%;
}

.bot-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.input-area {
  display: flex;
  align-items: center;
}

.input-area input {
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
}

.input-area button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.preset-questions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.preset-questions button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>