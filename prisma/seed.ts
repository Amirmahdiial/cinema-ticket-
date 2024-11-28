import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {
    const object1 = await prisma.movie.create({
        data: {
            title: "باغ کیانوش",
            description: "فیلم باغ کیانوش به کارگردانی رضا کشاورزحداد و تهیه‌کنندگی محمدجواد ...",
            director: "رضا کشاورز",
            genre: "ماجراجویی",
            rate: "4.0",
            background_image: "/Images/1/e478466bd7526046868013a1f7d51eb6.webp",
            actor_image: "/Images/1/f46a31eb308bacddd10a31795b8f7735.webp",
            card_image: "/Images/1/51e6de901eb9ec02e22e24f7f99c877d.webp"
        }
    });

}main()



// [
//     {
//     "title": "باغ کیانوش",
//     "description": "فیلم باغ کیانوش به کارگردانی رضا کشاورزحداد و تهیه‌کنندگی محمدجواد ...",
//     "director": "رضا کشاورز",
//     "genre": "ماجراجویی",
//     "rate": "4.0",
//     "background_image": "/Images/1/e478466bd7526046868013a1f7d51eb6.webp",
//     "actor_image": "/Images/1/f46a31eb308bacddd10a31795b8f7735.webp",
//     "card_image": "/Images/1/51e6de901eb9ec02e22e24f7f99c877d.webp"
//     },
//     {
//     "title": "صبحانه با زرافه ها",
//     "description": "فیلم صبحانه با زرافه‌ها به کارگردانی سروش صحت و تهیه‌کنندگی ...",
//     "director": "سروش صحت",
//     "genre": "کمدی",
//     "rate": "3.5",
//     "background_image": "/Images/2/0ddea1465973a57f9207a4035fa3ee1e.webp",
//     "actor_image": "/Images/2/15646132ed93d9b320f45da374f9c9d0.webp",
//     "card_image": "/Images/2/8530dc93a41d1fb4688e150e72bec750.webp"
//     },
//     {
//     "title": "زود پز",
//     "description": "فیلم زودپز به کارگردانی رامبد جوان و تهیه‌کنندگی منصور سهراب‌پور ...",
//     "director": "رامبد جوان",
//     "genre": "کمدی",
//     "rate": "3.6",
//     "background_image": "/Images/3/1ba7dd6370c8c20de58591ae545e2eaa.webp",
//     "actor_image": "/Images/3/542f5e14e0f6a5b0197d5817a81ff779.webp",
//     "card_image": "/Images/3/f003a8a90b15d78fb64c179e89d14336.webp"
//     }
//     ]