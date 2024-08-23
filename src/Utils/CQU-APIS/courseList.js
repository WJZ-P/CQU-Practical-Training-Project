

const courseList=await fetch('https://my.cqu.edu.cn/api/enrollment/enrollment/course-list?Ghabr1Qf=02zaroalqEHW_GkiJFHtYA_FJGAEGdNY_SQ3_1euckjFz5byIiqYwWWDRu7ni6Ag8Eruh6PHPC8K7JIH3yWJZSVEaN6I.w8bGE_tbvXGBGTcb4euumMPTsq', {
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,zh-TW;q=0.5',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjQ0MzAxMDcsInVzZXJfbmFtZSI6IjMwMDQ0MTM4IiwiYXV0aG9yaXRpZXMiOlsi5a2m55SfJktSX1RUIl0sImp0aSI6ImJhOTdiYjQ2LWU5OTEtNDc4Yy1iYWViLTNkNjVjYjRjMDY0NyIsImNsaWVudF9pZCI6InBlcnNvbmFsLXByb2QiLCJzY29wZSI6WyJhbGwiXX0.oyfeDlroBZNQpCo6nqjUIky08QwnTtAegbniAYUDgU4',
    'Connection': 'keep-alive',
    'Cookie': 'SltzIpc2lElOO=60L8J6QFN7xfjeW9zXPyoYYcQ0YTErWX.HvwZTEqnLcDUhXMO2cwtZ2rGU0lYIX_1pMSFZ3xYhbqMO7PYPxP9CzA; SESSION=Yjk1Mjk5YWYtZDFlZi00MjQ4LWJlOGQtNGFjMzM5Zjk4ZTJl; SltzIpc2lElOP=0z.xH6UjX5CzcSmlw0Cj4TF6OW2AW_kZrfa6oIHzJ_ZsBSF35anCjv7hFqE9qyBSMCCyun5_FPlmvQaOPt4Wht9gXYnl0l2JJHjcpBKkpEiFgqIf6S7B4KKTNcI0j7xQqo8mA0cNCPn2tDNLmQuV9Jh3_yn6kEoGK8sV7PhLddmp.AwfRP3TUihNbAXVIk3DuRwRiKPbm5_xEojnmxXiotExKl.sI5VtShmv4xbmKjPWApuRBLV7kXR3Teng3sgpR2pe0Zkc7jHUJviLZnQQoMWMfrTmCgEwCd8YknZG1nh.Lpl3QBdd_OctgZht46LS4RcHxVWnUxJAIl6_XHU2klyGvRQWLgHL7AgvNboaRUbnhr0NgrH6pikbYXE7Jja3a',
    'Referer': 'https://my.cqu.edu.cn/enroll/CourseStuSelectionList',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
    'sec-ch-ua': '"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"'
  }
});

console.log(await courseList.json());