import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  const { message } = await req.json();
  const prompt = `Bạn là YaThinh Assistant – trợ lý bán hàng quần áo nam. Trả lời ngắn gọn:
- Các sản phẩm: áo thun (149k+), sơ mi (199k+), quần jeans (299k+)
- Chính sách đổi trả: trong 7 ngày, còn tag, chưa giặt/hư hỏng.`;
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: message }
    ]
  });
  res.status(200).json({ reply: completion.choices[0].message.content });
}
