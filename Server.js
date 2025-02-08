// const express = require('express');
// const axios = require('axios'); // تأكد من تثبيت axios
// const cors = require('cors'); // لتجنب مشاكل CORS

// const app = express();
// const port = 3000;

// app.use(cors()); // استخدام CORS
// app.use(express.json()); // لتحليل بيانات JSON

// // نقطة نهاية لاختبار الخادم
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // نقطة نهاية لبدء محادثة جديدة
// app.post('/api/newChat', async (req, res) => {
//   const { ai_id } = req.body;
//   try {
//     const response = await axios.post('https://aigency.dev/api/v1/newChat', { ai_id });
//     res.json(response.data); // إرسال الاستجابة إلى العميل
//   } catch (error) {
//     res.status(500).json({ error: 'Error starting chat' });
//   }
// });

// // بدء تشغيل الخادم
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

