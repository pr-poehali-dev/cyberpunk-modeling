import React from "react";
import NeonHeading from "@/components/NeonHeading";
import NeonCard from "@/components/NeonCard";
import CyberButton from "@/components/CyberButton";
import HashtagCloud from "@/components/HashtagCloud";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const castingTags = [
    "кастингиспб", "моделиспб", "тфпспб", "ищумодельспб", "fashion", "models"
  ];

  const trainingTags = [
    "спб", "питер", "санктпетербург", "кастингиспб", "кастингипитер", 
    "обучениеспб", "школамоделейспб", "модельнаяшколаспб", "моделиспб", 
    "тфпспб", "портфолио", "позирование", "ищумодельспб", "fashion", "models"
  ];

  return (
    <div className="min-h-screen py-10 px-4">
      <header className="max-w-5xl mx-auto text-center mb-12">
        <NeonHeading level={1} color="pink" animated className="mb-4">
          ТФП Съёмки в СПб
        </NeonHeading>
        <p className="text-neon-blue text-lg mb-6 font-['VT323',monospace] leading-relaxed max-w-3xl mx-auto">
          {"_САНКТ>ПЕТЕРБУРГ // МОДЕЛЬНОЕ_АГЕНТСТВО_"}
        </p>
      </header>

      <main className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        <section>
          <NeonCard color="blue" className="h-full">
            <NeonHeading level={2} color="blue" className="mb-6">
              Кастинг моделей
            </NeonHeading>
            <div className="space-y-4 font-['VT323',monospace] text-lg">
              <p>
                Для ТФП съёмок в Санкт-Петербурге ищу заинтересованную в продвижении 
                актрису или модель для съёмок видеороликов и публикаций.
              </p>
              
              <div className="bg-muted/30 p-4 rounded border border-neon-blue/30">
                <h3 className="font-['Orbitron',sans-serif] text-lg mb-2 text-neon-blue">
                  ТИПАЖ:
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Славянская внешность</li>
                  <li>Возраст от 18 лет</li>
                  <li>Хорошая презентабельная внешность</li>
                  <li>Наличие свободного времени для творчества</li>
                </ul>
              </div>
              
              <Separator className="my-6 bg-neon-blue/30" />
              
              <HashtagCloud tags={castingTags} />
              
              <div className="pt-4">
                <CyberButton color="blue" size="lg" glitch>
                  Связаться со мной
                </CyberButton>
              </div>
            </div>
          </NeonCard>
        </section>

        <section>
          <NeonCard color="pink" className="h-full">
            <NeonHeading level={2} color="pink" className="mb-6">
              Обучение & Мастерство
            </NeonHeading>
            <div className="space-y-4 font-['VT323',monospace] text-lg">
              <p>
                В Санкт-Петербурге обучаю девушек модельному и актёрскому мастерству.
              </p>
              
              <div className="bg-muted/30 p-4 rounded border border-neon-pink/30">
                <h3 className="font-['Orbitron',sans-serif] text-lg mb-2 text-neon-pink">
                  ПРОГРАММА:
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Навыки работы на камеру</li>
                  <li>Обучение позированию</li>
                  <li>Нахождение правильных ракурсов</li>
                  <li>Проработка комплексов, зажимов</li>
                  <li>Раскрепощение</li>
                </ul>
              </div>
              
              <p className="pt-2">
                Пишите в телеграм по вопросам обучения в Санкт-Петербурге.
              </p>
              
              <Separator className="my-6 bg-neon-pink/30" />
              
              <HashtagCloud tags={trainingTags} />
              
              <div className="pt-4 flex justify-between items-center">
                <CyberButton color="pink" size="lg" onClick={() => window.open("https://t.me/vocoders", "_blank")}>
                  t.me/vocoders
                </CyberButton>
              </div>
            </div>
          </NeonCard>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto text-center mt-16 text-sm text-muted-foreground">
        <p className="font-['VT323',monospace] text-base">
          &copy; {new Date().getFullYear()} &bull; ТФП СЪЁМКИ СПБ &bull; <span className="text-neon-blue">НЕОНОВЫЙ СТИЛЬ</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;