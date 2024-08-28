<template>
  <div class="chat-container" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
    <div class="chat-messages animate__animated animate__backInRight">
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
    <div class="input-area animate__animated animate__backInUp">
      <input v-model="inputText" placeholder="请输入问题..." @keydown.enter="sendMessage" />
      <button @click="sendMessage">发送</button>
      <button @click="clearMessages" style="margin-left: 10px;">清空聊天记录</button>
    </div>
    <div class="preset-questions animate__animated animate__backInUp">
      <button v-for="preset in presets" :key="preset.id" @click="sendPreset(preset)">
        {{ preset.text }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ElMessage} from "element-plus";

export default {
  data() {
    return {
      inputText: '',
      messages: this.loadMessages(),
      presets: [
        { id: 1, text: '我怎么注册账号？' },
        { id: 2, text: '如何修改密码？' },
        { id: 3, text: '如何联系人工客服？' },
        { id: 4, text: '如何查询宿舍信息?' },
      ],
      botUrl: 'http://127.0.0.1:8080/nekoTalk', // 使用后端的API URL
      backgroundImage: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      botAvatar: 'https://img.zcool.cn/community/031e0aa5805f167a84a0d304f1c392a.jpg', // 替换为实际的机器人头像 URL
      botPersonality: this.loadPersonality() // 初始化时加载保存的性格
    };
  },
  methods: {
    async sendMessage() {
      if (this.inputText.trim() === '') return;
      const userMessage = { id: Date.now(), user: 'user', text: this.inputText };
      this.messages.push(userMessage);
      this.inputText = '';
      await this.fetchBotResponse(userMessage.text);
      this.saveMessages();
    },
    sendPreset(preset) {
      const presetMessage = { id: Date.now(), user: 'user', text: preset.text };
      this.messages.push(presetMessage);
      this.fetchBotResponse(preset.text);
      this.saveMessages();
    },
    async fetchBotResponse(userInput) {
      ElMessage.success('努力思考中！')
      const nekoTalkContent = { role: "user", content: userInput };
      const payload = {
        model: "gpt-3.5-turbo",
        messages: [nekoTalkContent],
        personality: this.botPersonality // 将性格信息添加到请求中
      };

      try {
        const response = await axios.post(this.botUrl, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        // 第一次解析外层的JSON
        const nestedJsonString = response.data?.data;
        // 第二次解析内层的JSON字符串
        const nestedJsonObject = JSON.parse(nestedJsonString);

        // 获取API返回的内容
        const botResponse = nestedJsonObject.choices[0].message.content;

        // 处理换行符和不必要的符号
        const cleanResponse = botResponse.replace(/\n/g, " ").trim();

        this.messages.push({ id: Date.now(), user: 'bot', text: cleanResponse });
      } catch (error) {
        console.error('Error fetching bot response:', error);
        this.messages.push({ id: Date.now(), user: 'bot', text: '对不起，我暂时无法回答这个问题。' });
      }
      this.saveMessages();
    },
    saveMessages() {
      localStorage.setItem('chatMessages', JSON.stringify(this.messages));
    },
    loadMessages() {
      this.loadPersonality()
      const storedMessages = localStorage.getItem('chatMessages');
      return storedMessages ? JSON.parse(storedMessages) : this.initializeGreeting();
    },
    clearMessages() {
      this.messages = []; // 清空消息数组
      this.saveMessages(); // 保存到LocalStorage
    },
    loadPersonality() {
      const storedPersonality = localStorage.getItem('botPersonality');
      return storedPersonality ? JSON.parse(storedPersonality) : {
        name: "小薇",
        greeting: "你好，我是重庆大学智能迎新机器人小薇，你有什么问题可以问我呀!"
      };
    },
    savePersonality(personality) {
      this.botPersonality = personality;
      localStorage.setItem('botPersonality', JSON.stringify(personality));
    },
    initializeGreeting() {
      console.log('初始化调用')
      this.loadPersonality()
      const greetingMessage = { id: Date.now(), user: 'bot', text: this.botPersonality?.greeting? this.botPersonality.greeting : "你好，我是重庆大学的小薇，很高兴为您服务！我们宿舍有梅兰竹菊四个园区，我现在正在一个AI聊天界面，为身为新生的您提供帮助噢！" };
      return [greetingMessage];
    }
  },
  mounted() {
    // 在组件挂载时触发初始化问候
    if (this.messages.length === 0) {
      this.messages = this.initializeGreeting();
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
  padding: 1vmin;
  border-radius: 10px;
  margin-right: auto;
  max-width: 70%;
}

.bot-message {
  font-size: 15px;
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