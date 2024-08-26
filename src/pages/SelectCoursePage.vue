<script setup>
import {onBeforeMount, onBeforeUnmount, reactive, ref} from "vue";
import Section from "@/components/UtilsComponnet/Section.vue";
import Header from "@/components/Header.vue";
import axios from "axios";

const selectedList = ref({major: [], commonSense: [], unLimited: []});//主修，通识，非限
const majorCourseList = [
  {
    "id": "10000045134",
    "name": "大数据架构与技术",
    "codeR": "CST31214",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "专业课程",
    "selectionArea": "主修专业课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Qn5oyyyHD/j6GiUm73JugA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000045016",
    "name": "软件工程",
    "codeR": "CST31108",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "专业课程",
    "selectionArea": "主修专业课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "必修",
    "encryptedCourseId": "Qn5oyyyHD/jo3a8X@2BxuNgw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000045151",
    "name": "移动应用软件开发",
    "codeR": "CST31222",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "专业课程",
    "selectionArea": "主修专业课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Qn5oyyyHD/joWt7kUZoa2g==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000045153",
    "name": "JAVA企业级应用",
    "codeR": "CST31215",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "专业课程",
    "selectionArea": "主修专业课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "选修",
    "encryptedCourseId": "Qn5oyyyHD/iCk90wgF4A2g==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000044986",
    "name": "计算机网络",
    "codeR": "CST31119",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "专业课程",
    "selectionArea": "主修专业课程",
    "credit": "3.5",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "必修",
    "encryptedCourseId": "cEw5FOYYbN1GOQiuAQOGeQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000045024",
    "name": "操作系统",
    "codeR": "CST31115",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "专业课程",
    "selectionArea": "主修专业课程",
    "credit": "3.5",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "必修",
    "encryptedCourseId": "Qn5oyyyHD/jcKti@2BceCSXQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000045173",
    "name": "专业基本能力测试",
    "codeR": "CST43101",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "个性化模块",
    "selectionArea": "主修专业课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "必修",
    "encryptedCourseId": "Qn5oyyyHD/ixx6l5fSVcmQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000004867",
    "name": "形势与政策5",
    "codeR": "MT80005",
    "departmentId": "56",
    "departmentName": "马克思主义学院",
    "courseCategory": "公共基础课程",
    "selectionArea": "主修专业课程",
    "credit": "0",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "必修",
    "encryptedCourseId": "avNdVjl7ZjVdg18CFihyGg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1177",
    "courseSetName": "形势与政策",
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000004631",
    "name": "硬件综合设计",
    "codeR": "CST33101",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "实践环节",
    "selectionArea": "主修专业课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "必修",
    "encryptedCourseId": "avNdVjl7ZjXnTRncX4IcKA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  }
]
const commonSenseCourseList = [
  {
    "id": "10000005330",
    "name": "摄影艺术创作",
    "codeR": "HG00058",
    "departmentId": "114819077",
    "departmentName": "艺术学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "rCX8YG4jargGYxHJ5G9QPQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "B区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000005721",
    "name": "化学与生活",
    "codeR": "STG00017",
    "departmentId": "114819094",
    "departmentName": "化学化工学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "rCX8YG4jarhFwJmyaqnyHg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000008716",
    "name": "能源与可持续发展",
    "codeR": "STG00006",
    "departmentId": "114819086",
    "departmentName": "能源与动力工程学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Tda1judiay5BU2V5rUachQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "B区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000011673",
    "name": "电子设计与科技创新",
    "codeR": "IPG00013",
    "departmentId": "114819084",
    "departmentName": "光电工程学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Hcl10JK6b9ejl5UQ25cNJA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000018972",
    "name": "创业管理",
    "codeR": "IPG00009",
    "departmentId": "100006",
    "departmentName": "学生职业发展与就业指导中心",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "xFa2zOErcjmJxjVm86qXkQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "B区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000012472",
    "name": "中国传统文化经典解读",
    "codeR": "HG00001",
    "departmentId": "56",
    "departmentName": "马克思主义学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "BqFjqJeMsXXOZPdm5eEOvQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000014105",
    "name": "职业发展与就业指导",
    "codeR": "IPG00008",
    "departmentId": "100006",
    "departmentName": "学生职业发展与就业指导中心",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "wJJT5a/C//manKcXNRorOQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000011592",
    "name": "大学生心理健康与成长",
    "codeR": "SSG00033",
    "departmentId": "114819120",
    "departmentName": "党委学生工作部",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Hcl10JK6b9fbJX7X8cYgdw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000011576",
    "name": "川剧艺术与身段体验",
    "codeR": "HG00072",
    "departmentId": "114819077",
    "departmentName": "艺术学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Hcl10JK6b9cvf7EL6rG1zg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000014209",
    "name": "绘画艺术创作与审美体验",
    "codeR": "HG00008",
    "departmentId": "114819077",
    "departmentName": "艺术学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "wJJT5a/C//kJsc1UAs81Tw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000012533",
    "name": "丝绸之路与佛教的东传",
    "codeR": "HG00052",
    "departmentId": "114819106",
    "departmentName": "博雅学院(高研院)",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "BqFjqJeMsXWEEsKByHmjUA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000011712",
    "name": "药物发现简史",
    "codeR": "STG00023",
    "departmentId": "114819108",
    "departmentName": "药学院(创新药物研究中心)",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Hcl10JK6b9dlYTaMI3s6OQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000042492",
    "name": "大学国文",
    "codeR": "HG00076",
    "departmentId": "114819106",
    "departmentName": "博雅学院(高研院)",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "I8ZAR@2BCUmuzJVKmZZjm1qw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000018852",
    "name": "企业法律风险管理",
    "codeR": "SSG00032",
    "departmentId": "114819074",
    "departmentName": "经济与工商管理学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "xFa2zOErcjlVJkXflnfXPQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000006911",
    "name": "肿瘤预防与治疗",
    "codeR": "STG00034",
    "departmentId": "114819101",
    "departmentName": "生命科学学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "p1n2uBPdaXkYjUiEeHeU1A==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000034012",
    "name": "世界经典音乐文化解码",
    "codeR": "HG00073",
    "departmentId": "114819077",
    "departmentName": "艺术学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "at/tnJb2E/T@2BzlTFiRI8pQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000012109",
    "name": "趣味物理问题探索",
    "codeR": "IPG00015",
    "departmentId": "114819102",
    "departmentName": "物理学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "BqFjqJeMsXVmiOBJgqyzww==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000004960",
    "name": "认识转基因",
    "codeR": "STG00033",
    "departmentId": "114819101",
    "departmentName": "生命科学学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "avNdVjl7ZjXFr4vQNMCMrg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000012455",
    "name": "外国美术史及名作鉴赏",
    "codeR": "HG00007",
    "departmentId": "114819077",
    "departmentName": "艺术学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "BqFjqJeMsXUrdI3Ko9WGVQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000012453",
    "name": "经济学导论",
    "codeR": "SSG00007",
    "departmentId": "114819074",
    "departmentName": "经济与工商管理学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "BqFjqJeMsXVzfOf3P57UYQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000005405",
    "name": "德国制造与创新",
    "codeR": "HG00062",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "rCX8YG4jari5FgPDLiSAzw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000011512",
    "name": "动作与科学健身",
    "codeR": "HG00078",
    "departmentId": "114819097",
    "departmentName": "体育学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Hcl10JK6b9dgwOkEssRRTw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000006711",
    "name": "城市生态基础",
    "codeR": "STG00016",
    "departmentId": "114819093",
    "departmentName": "环境与生态学院",
    "courseCategory": "通识教育课程",
    "selectionArea": "通识教育课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "p1n2uBPdaXlCl0oPQHhcrw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1171",
    "courseSetName": "通识教育课程",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  }
]
const unLimitedCourseList = [
  {
    "id": "10000013232",
    "name": "现代仪器分析创新实践",
    "codeR": "IDUE260",
    "departmentId": "100011",
    "departmentName": "分析测试中心",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "59K7oATBpdULfqr6iZpCow==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000036918",
    "name": "人工智能基础及应用",
    "codeR": "IDUE349",
    "departmentId": "114819089",
    "departmentName": "自动化学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "DecC55ZaRqUF0aPItQt6VQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000046043",
    "name": "西方近现代哲学",
    "codeR": "IDUE381",
    "departmentId": "114819106",
    "departmentName": "博雅学院(高研院)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "3.0",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "mawbRWnzOntZOqqmEKfpJA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000044701",
    "name": "大学生安全文化",
    "codeR": "IDUE058",
    "departmentId": "114819096",
    "departmentName": "资源与安全学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "cEw5FOYYbN3eRbVxK/N6EA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000043974",
    "name": "高分子化学",
    "codeR": "IDUE336",
    "departmentId": "114819108",
    "departmentName": "药学院(创新药物研究中心)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "WCu52xU2vU29fvyPLyI52w==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000004765",
    "name": "现代检测技术（Ⅱ）",
    "codeR": "IDUE022",
    "departmentId": "114819084",
    "departmentName": "光电工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "avNdVjl7ZjXJkQMCbR5TPg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000011052",
    "name": "留学素养英语--雅思听力",
    "codeR": "IDUE234",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Hcl10JK6b9d9bpaRSSr6mA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000014283",
    "name": "现代生物工程进展",
    "codeR": "IDUE007",
    "departmentId": "114819095",
    "departmentName": "生物工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "wJJT5a/C//lmGAQGZNrdTA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000003677",
    "name": "交通运输工程导论",
    "codeR": "IDUE084",
    "departmentId": "114819089",
    "departmentName": "自动化学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "1",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "FIR3G9GPCI4X/1bm/wxaKQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000007100",
    "name": "电力工程基础",
    "codeR": "IDUE081",
    "departmentId": "114819087",
    "departmentName": "电气工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "u0zZMi8C9VGeLQ@2BZxlTUng==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000010994",
    "name": "通用流体机械",
    "codeR": "IDUE048",
    "departmentId": "114819086",
    "departmentName": "能源与动力工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "R1RBK6WysmLe7XUY02pk5g==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000013980",
    "name": "留学素养英语--托福阅读",
    "codeR": "IDUE239",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "59K7oATBpdWNJh4rWSraZg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000010997",
    "name": "可再生能源及其利用技术",
    "codeR": "IDUE051",
    "departmentId": "114819086",
    "departmentName": "能源与动力工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "R1RBK6WysmKTz@2BvXMCrxug==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000043200",
    "name": "纳米材料基础",
    "codeR": "IDUE209",
    "departmentId": "114819108",
    "departmentName": "药学院(创新药物研究中心)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "WCu52xU2vU2yOj7jyWENSw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000013973",
    "name": "智能故障诊断技术与应用",
    "codeR": "IDUE204",
    "departmentId": "114819089",
    "departmentName": "自动化学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "59K7oATBpdWKH@2BHHXl7eXg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000044394",
    "name": "新药研发的故事",
    "codeR": "IDUE266",
    "departmentId": "114819108",
    "departmentName": "药学院(创新药物研究中心)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "cEw5FOYYbN2e3iA1FNuBxg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000020241",
    "name": "室内环境与装饰艺术",
    "codeR": "IDUE077",
    "departmentId": "114819085",
    "departmentName": "材料科学与工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "wqfvq401tJmBlFpeaOUQoQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000037353",
    "name": "美术鉴赏与艺术体验",
    "codeR": "IDUE409",
    "departmentId": "114819077",
    "departmentName": "艺术学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "HfYsDkPCY4JR8bpb0lWTzQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000002432",
    "name": "电工生态与生物医学",
    "codeR": "IDUE082",
    "departmentId": "114819087",
    "departmentName": "电气工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "5W@2BfoidQTfdWT5x6OYeozA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000002433",
    "name": "建筑智能化系统",
    "codeR": "IDUE083",
    "departmentId": "114819087",
    "departmentName": "电气工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2.5",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "5W@2BfoidQTffaHWWHaeOEgg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000040018",
    "name": "人工智能与数智人文实践基础",
    "codeR": "IDUE350",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "7f4pPO58lzwic5hBAx97Zw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000011016",
    "name": "生物力学基础",
    "codeR": "IDUE006",
    "departmentId": "114819095",
    "departmentName": "生物工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "Hcl10JK6b9fo3a8X@2BxuNgw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000040017",
    "name": "以诗歌阅读人生",
    "codeR": "IDUE351",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "7f4pPO58lzxDV/cTWP1DWw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000038972",
    "name": "留学素养英语--雅思写作",
    "codeR": "IDUE235",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Xepw2FK9z42JxjVm86qXkQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000008642",
    "name": "城市声景观",
    "codeR": "IDUE053",
    "departmentId": "114819091",
    "departmentName": "建筑城规学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "1",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "Tda1judiay5w9Ty9jpPMkg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "B区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000009852",
    "name": "基础俄语（1）",
    "codeR": "IDUE191",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "4",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "JxbQRHqcJ7xVJkXflnfXPQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000014407",
    "name": "智能控制基础",
    "codeR": "IDUE259",
    "departmentId": "114819089",
    "departmentName": "自动化学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "wJJT5a/C//nAb7fyw2@2B0RQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000041593",
    "name": "民法基础",
    "codeR": "IDUE0316",
    "departmentId": "114819074",
    "departmentName": "经济与工商管理学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "1",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "sRa/ZH0mxJwqEO5adb5kng==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000017594",
    "name": "纳米材料与技术",
    "codeR": "IDUE225",
    "departmentId": "114819094",
    "departmentName": "化学化工学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "h@2Bvi6DVNKjCxMrHIjC49xA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000020375",
    "name": "生物化学基础",
    "codeR": "IDUE210",
    "departmentId": "114819108",
    "departmentName": "药学院(创新药物研究中心)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "wqfvq401tJlxAuaGb0jfYw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000002421",
    "name": "经济学原理",
    "codeR": "IDUE071",
    "departmentId": "114819073",
    "departmentName": "公共管理学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "5W@2BfoidQTff7ByE0yrHylw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000019092",
    "name": "材料分析测试方法",
    "codeR": "IDUE220",
    "departmentId": "114819094",
    "departmentName": "化学化工学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "CaccnHTs9HT3zvVXomzj3g==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000004965",
    "name": "航空航天复合材料II",
    "codeR": "IDUE029",
    "departmentId": "114819149",
    "departmentName": "航空航天学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "avNdVjl7ZjX1wIdswZk7qQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000040703",
    "name": "城市 地下空间概论",
    "codeR": "IDUE038",
    "departmentId": "114819092",
    "departmentName": "土木工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "1.5",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "7f4pPO58lzypZnIGbVILIQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000011124",
    "name": "留学素养英语--托福口语",
    "codeR": "IDUE240",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "Hcl10JK6b9dlcOCNV/Sydw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000013666",
    "name": "史记",
    "codeR": "IDUE001",
    "departmentId": "114819106",
    "departmentName": "博雅学院(高研院)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "59K7oATBpdVL5bHTr7NQUw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000010557",
    "name": "税收",
    "codeR": "IDUE135",
    "departmentId": "114819074",
    "departmentName": "经济与工商管理学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "1",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "R1RBK6WysmK6/7rsrD/LMQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000043485",
    "name": "生物多样性及其保护",
    "codeR": "IDUE263",
    "departmentId": "114819093",
    "departmentName": "环境与生态学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "WCu52xU2vU0i53I0UwuSRg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000044974",
    "name": "能源动力过程中的环境保护",
    "codeR": "IDUE047",
    "departmentId": "114819086",
    "departmentName": "能源与动力工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "cEw5FOYYbN29fvyPLyI52w==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000037822",
    "name": "东亚跨文化交际论",
    "codeR": "IDUE124",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "HfYsDkPCY4I8Z1szJoWdeA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000040556",
    "name": "医疗器械质量控制",
    "codeR": "IDUE012",
    "departmentId": "114819095",
    "departmentName": "生物工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "7f4pPO58lzyLaJTWESO82w==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000010780",
    "name": "法律英语",
    "codeR": "IDUE201",
    "departmentId": "114819080",
    "departmentName": "法学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "R1RBK6WysmK0NaFKtFuAgQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "B区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000013658",
    "name": "鲁迅精读",
    "codeR": "IDUE003",
    "departmentId": "114819106",
    "departmentName": "博雅学院(高研院)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "59K7oATBpdWOoJ0OxjENyA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000011757",
    "name": "机器学习基础及应用",
    "codeR": "IDUE227",
    "departmentId": "114819089",
    "departmentName": "自动化学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "Hcl10JK6b9d2OBHj/TF6Qg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000019473",
    "name": "证券投资分析",
    "codeR": "IDUE317",
    "departmentId": "114819073",
    "departmentName": "公共管理学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "3.0",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "CaccnHTs9HQlt7zX325j1w==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000046024",
    "name": "四书",
    "codeR": "IDUE369",
    "departmentId": "114819106",
    "departmentName": "博雅学院(高研院)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2.0",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "mawbRWnzOnvcKti@2BceCSXQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000041893",
    "name": "药事管理学",
    "codeR": "IDUE289",
    "departmentId": "114819108",
    "departmentName": "药学院(创新药物研究中心)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "sRa/ZH0mxJw7kKb9NSUZLQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000011071",
    "name": "高阶英语阅读（学术）",
    "codeR": "IDUE244",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "Hcl10JK6b9cCjl1sksXrWw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000010134",
    "name": "心理援助与拓展训练",
    "codeR": "IDUE069",
    "departmentId": "114819073",
    "departmentName": "公共管理学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "R1RBK6WysmL6GiUm73JugA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000036623",
    "name": "基础法语（1）",
    "codeR": "IDUE192",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "4",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "DecC55ZaRqUfFD@2B5oYYyPw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000036624",
    "name": "基础法语（2）",
    "codeR": "IDUE241",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "4",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "DecC55ZaRqUvwL1Sx6JLXQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000012954",
    "name": "高阶英语译与写（通用）",
    "codeR": "IDUE251",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "BqFjqJeMsXV9@2BnbIjFtoWg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000012834",
    "name": "翻译技术实践",
    "codeR": "IDUE142",
    "departmentId": "114819076",
    "departmentName": "外国语学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "1",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "BqFjqJeMsXWagJiNdUXThA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000016593",
    "name": "动物生物学",
    "codeR": "IDUE005",
    "departmentId": "114819095",
    "departmentName": "生物工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "xoHAxMZHzQgqEO5adb5kng==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "B区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000046018",
    "name": "文化研究导论",
    "codeR": "IDUE199",
    "departmentId": "114819106",
    "departmentName": "博雅学院(高研院)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2.0",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "mawbRWnzOnsic5hBAx97Zw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000043420",
    "name": "生态学导论",
    "codeR": "IDUE198",
    "departmentId": "114819093",
    "departmentName": "环境与生态学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "WCu52xU2vU0ABn4HonuEsw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000044914",
    "name": "工程伦理学",
    "codeR": "IDUE052",
    "departmentId": "114819086",
    "departmentName": "能源与动力工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "cEw5FOYYbN1qqqM65Ug2Dw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "C区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000014047",
    "name": "建筑概论",
    "codeR": "IDUE248",
    "departmentId": "114819093",
    "departmentName": "环境与生态学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "wJJT5a/C//l4dQZl/p9gcw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000046048",
    "name": "中国社会文化史",
    "codeR": "IDUE433",
    "departmentId": "114819106",
    "departmentName": "博雅学院(高研院)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2.0",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "mawbRWnzOntTiE4ygff@2Big==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000046045",
    "name": "中国现代文学",
    "codeR": "IDUE321",
    "departmentId": "114819106",
    "departmentName": "博雅学院(高研院)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2.0",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "mawbRWnzOnvXRYx7IT@2BrPA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000043455",
    "name": "土壤生态学",
    "codeR": "IDUE339",
    "departmentId": "114819093",
    "departmentName": "环境与生态学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "WCu52xU2vU0rdI3Ko9WGVQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000036353",
    "name": "国际商务与法律（双语）",
    "codeR": "IDUE337",
    "departmentId": "114819080",
    "departmentName": "法学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "DecC55ZaRqVR8bpb0lWTzQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000016851",
    "name": "建筑美学",
    "codeR": "IDUE315",
    "departmentId": "114819085",
    "departmentName": "材料科学与工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "xoHAxMZHzQincVs8KIJkZg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区",
      "B区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000016573",
    "name": "知识与创新思维",
    "codeR": "IDUE099",
    "departmentId": "114819083",
    "departmentName": "机械与运载工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "1",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "xoHAxMZHzQiH8Is49D76GQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000009593",
    "name": "钢结构设计原理",
    "codeR": "IDUE035",
    "departmentId": "114819092",
    "departmentName": "土木工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "JxbQRHqcJ7wqEO5adb5kng==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000016683",
    "name": "人类生态学",
    "codeR": "IDUE267",
    "departmentId": "114819093",
    "departmentName": "环境与生态学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "xoHAxMZHzQiKhBtrLeWwKw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000036890",
    "name": "入侵生态学原理与应用",
    "codeR": "IDUE338",
    "departmentId": "114819093",
    "departmentName": "环境与生态学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "DecC55ZaRqUj3/Cal@2Bt/8A==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000038852",
    "name": "竹木结构",
    "codeR": "IDUE283",
    "departmentId": "114819092",
    "departmentName": "土木工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Xepw2FK9z41VJkXflnfXPQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000009699",
    "name": "混凝土结构设计原理",
    "codeR": "IDUE034",
    "departmentId": "114819092",
    "departmentName": "土木工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "JxbQRHqcJ7yCnjcIvzNwXg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000012900",
    "name": "海洋与法律",
    "codeR": "IDUE231",
    "departmentId": "114819080",
    "departmentName": "法学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "BqFjqJeMsXX70pk@2BTSBbwg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000018848",
    "name": "企业会计法律风险管理",
    "codeR": "IDUE136",
    "departmentId": "114819074",
    "departmentName": "经济与工商管理学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "1",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "xFa2zOErcjl/D/@2BFBwXCVQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000003874",
    "name": "智能网联汽车",
    "codeR": "IDUE020",
    "departmentId": "114819083",
    "departmentName": "机械与运载工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "1",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "FIR3G9GPCI6h6pl95z/hPw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "A区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000039793",
    "name": "生物化学（Ⅰ）",
    "codeR": "IDUE221",
    "departmentId": "114819094",
    "departmentName": "化学化工学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": null,
    "courseNature": "选修",
    "encryptedCourseId": "nP9kXsWJ50nUd/n0qhj41w==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000043405",
    "name": "市场营销学",
    "codeR": "IDUE306",
    "departmentId": "114819075",
    "departmentName": "管理科学与房地产学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "WCu52xU2vU25FgPDLiSAzw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000007825",
    "name": "人工智能导论",
    "codeR": "IDUE189",
    "departmentId": "114819081",
    "departmentName": "大数据与软件学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "u0zZMi8C9VFOoT7xjO0VFg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000046022",
    "name": "社会契约论",
    "codeR": "IDUE159",
    "departmentId": "114819106",
    "departmentName": "博雅学院(高研院)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2.0",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "mawbRWnzOns1ZEC2yij2aQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000014184",
    "name": "植物生态学",
    "codeR": "IDUE278",
    "departmentId": "114819093",
    "departmentName": "环境与生态学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "wJJT5a/C//nl0TYsBeJgxg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000046015",
    "name": "中国政治思想史",
    "codeR": "IDUE156",
    "departmentId": "114819106",
    "departmentName": "博雅学院(高研院)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "3.0",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "mawbRWnzOnvSYC6MTO/Nyw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000046017",
    "name": "Big Questions",
    "codeR": "IDUE158",
    "departmentId": "114819106",
    "departmentName": "博雅学院(高研院)",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2.0",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "mawbRWnzOntDV/cTWP1DWw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  },
  {
    "id": "10000044877",
    "name": "创新思维与职场能力",
    "codeR": "IDUE445",
    "departmentId": "114819083",
    "departmentName": "机械与运载工程学院",
    "courseCategory": "个性化模块",
    "selectionArea": "非限制选修课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "cEw5FOYYbN1VTxQ8EYx1Rg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1170",
    "courseSetName": "非限制选修课程集",
    "replaceCourseCodeOrigin": null,
    "gateCount": 0
  }
]

const selectedCourseInfo = ref({
  count: 0,
  credit: 0,
})


let allCourseList=ref([])//所有课程的列表，存储已选择的所有课程信息

//在勾选新的课程的时候，统计对应的总门数和总学分数,并且修改allCourseList
function courseChangeListener() {
  let newCourseList=[]        //用来存放最终展示的课程，以数组的方式存放
  let newcredit=0;
  let count=0;
  for(let kind in selectedList.value){//遍历所有的课程

    for(let everyClass of selectedList.value[kind]){
      newcredit+=Number(everyClass.credit);
      count++;
      newCourseList.push(everyClass)
    }
  }
  selectedCourseInfo.value.count=count
  selectedCourseInfo.value.credit=newcredit
  allCourseList.value=newCourseList
}

function handleMajorSelectChange(value) {
  console.log('下面在这里打印出value')
  console.log(value)
  selectedList.value.major = value//把多选的结果存入到selectedList内，供后续使用
  console.log('下面是selectedList')
  console.log(selectedList.value)
  courseChangeListener()
}

function handleMinorSelectChange(value) {

  console.log(value)
  selectedList.value.minor = value//把多选的结果存入到selectedList内，供后续使用
  console.log(selectedList.value)
  courseChangeListener()
}

function handleUnLimitedSelectChange(value) {

  console.log(value)
  selectedList.value.unLimited = value//把多选的结果存入到selectedList内，供后续使用
  console.log(selectedList.value)
  courseChangeListener()
}

onBeforeMount(()=>{
  // axios.put('https://127.0.0.1:8080/course')
})
</script>

<template>
  <div style="display: flex;flex-direction: column;background-color: #e6effa;width: 100%;height: 100%">
    <Header title="重庆大学在线选课系统"/>
    <div style="display: flex;justify-content: center;">
      <Section class="main-section">
        <div class="simulate-select-div">
          <div class="table-class">

            <div class="box-div">
              <h3>主修专业课程</h3>
              <el-table :data="majorCourseList" stripe
                        @selection-change="handleMajorSelectChange" size="large"
                        max-height="500" table-layout="auto" border>
                <el-table-column class="table-column" label="课程名字" prop="name" width="180"/>
                <el-table-column class="table-column" label="课程代码" prop="codeR" width="125"/>
                <el-table-column class="table-column" label="学分" prop="credit" width="100"/>
                <el-table-column class="table-column" label="校区" prop="campusShortNameSet" width="125"/>
                <el-table-column class="table-column" label="课程类别" prop="courseCategory" width="200"/>
                <el-table-column class="table-column" label="课程性质" prop="courseNature"/>
                <el-table-column class="table-column" label="所属学院" prop="departmentName"/>
                <el-table-column class="table-column" fixed="right" type="selection" width="55"/>
              </el-table>
            </div>

            <div class="box-div">
              <h3>通识教育课程</h3>
              <el-table :data="commonSenseCourseList" stripe
                        @selection-change="handleMinorSelectChange" size="large"
                        max-height="500" table-layout="auto" border>
                <el-table-column class="table-column" label="课程名字" prop="name" width="180"/>
                <el-table-column class="table-column" label="课程代码" prop="codeR" width="125"/>
                <el-table-column class="table-column" label="学分" prop="credit" width="100"/>
                <el-table-column class="table-column" label="校区" prop="campusShortNameSet" width="125"/>
                <el-table-column class="table-column" label="课程类别" prop="courseCategory" width="200"/>
                <el-table-column class="table-column" label="课程性质" prop="courseNature"/>
                <el-table-column class="table-column" label="所属学院" prop="departmentName"/>
                <el-table-column class="table-column" fixed="right" type="selection" width="55"/>
              </el-table>
            </div>
            <div class="box-div">
              <h3>非限制选修课程</h3>
              <el-table :data="unLimitedCourseList" stripe
                        @selection-change="handleUnLimitedSelectChange" size="large"
                        max-height="500" table-layout="auto" border>
                <el-table-column class="table-column" label="课程名字" prop="name" width="180"/>
                <el-table-column class="table-column" label="课程代码" prop="codeR" width="125"/>
                <el-table-column class="table-column" label="学分" prop="credit" width="100"/>
                <el-table-column class="table-column" label="校区" prop="campusShortNameSet" width="125"/>
                <el-table-column class="table-column" label="课程类别" prop="courseCategory" width="200"/>
                <el-table-column class="table-column" label="课程性质" prop="courseNature"/>
                <el-table-column class="table-column" label="所属学院" prop="departmentName"/>
                <el-table-column class="table-column" fixed="right" type="selection" width="55"/>
              </el-table>
            </div>
          </div>
          <div class="show-selected-div">
            <Section style="background-color: #abc6e1;width: 100%;height: fit-content;margin-top: 10px">
              <h2>已选课程&nbsp;</h2>
              <h2 style="color: #52c41a">{{ selectedCourseInfo.count }}&nbsp;</h2>
              <h2>门</h2>
              <h2 style="color: #52c41a">&nbsp;{{ selectedCourseInfo.credit }}&nbsp;</h2>
              <h2>学分</h2>
            </Section>
            <Section class="show-selected-section">
                <li v-for="item in allCourseList" :key="item.name">
                  <Section class="course-section">
                    <h3 style="color: #70c51d">{{item.courseNature}}</h3>
                    <p class="course-name">{{ item.name }}</p>
                    <h4>{{item.credit}}&nbsp;学分</h4>
                  </Section>
                </li>
            </Section>
          </div>
        </div>
      </Section>
    </div>
  </div>
</template>


<style scoped>

.main-section {
  width: 100%;
  margin: 15px;
  padding: 15px;
  display: flex;
  justify-content: start;
  align-items: start;
}

/*装载所有table的div */
.table-class {
  width: 70%;
  margin-right: 10px;
}

.simulate-select-div {
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
}

.box-div {
  width: 100%;
  border: 1px solid #e6effa;
  box-shadow: 0 0 10px #e6effa;
  padding: 10px;
  margin: 10px 5px 10px 0;
}

.show-selected-div {
  width: 100%;
  display: flex;
  justify-content: start;
  height: 100%;
  flex-direction: column;
}

h3 {
  color: #535b96;
}

.show-selected-section {
  background-color: #e4e9ee;
  width: 100%;
  height: fit-content;
  margin-top: 10px;
  flex-direction: column;
  box-shadow: 0 0 10px #e6effa;
}
.course-section{
  margin:5px 0 5px 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 10px 0 10px;
  transition: 0.2s ease-in-out;
  background-color: #f9fcfc;
  box-shadow: 0 0 15px #e6effa;
  &:hover{
    scale: 1.03;
    box-shadow: 0 0 10px #e6effa;
  }
}

.course-name{
  font-size: 1.3vw;
  font-weight: bold;
  color: #178cf2;
}

li{
  list-style: none;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>