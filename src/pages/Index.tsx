import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showSuccess, setShowSuccess] = useState(true);

  const handleClose = () => {
    setShowSuccess(false);
  };

  if (!showSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-muted-foreground">Форма оплаты</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto p-4">
        <button 
          onClick={handleClose}
          className="p-2 mb-8 hover:bg-secondary rounded-lg transition-colors"
        >
          <Icon name="X" size={28} className="text-muted-foreground" />
        </button>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold mb-3">Перевод выполнен</h1>
          <p className="text-muted-foreground text-lg">Счёт списания ··1234</p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="bg-secondary px-6 py-3 rounded-2xl">
            <span className="text-2xl font-medium">900 ₽</span>
          </div>
          <Icon name="ArrowRight" size={24} className="text-muted-foreground" />
          <div className="bg-secondary px-6 py-3 rounded-2xl flex items-center gap-2">
            <span className="text-2xl font-medium">860 ₽</span>
            <Icon name="EyeOff" size={20} className="text-muted-foreground" />
          </div>
        </div>

        <div className="bg-card rounded-[2rem] p-8 relative">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <div className="relative">
              <div className="w-32 h-32 bg-primary rounded-[2rem] flex items-center justify-center shadow-xl">
                <Icon name="Check" size={64} className="text-white" strokeWidth={3} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-background rounded-full flex items-center justify-center border-4 border-card">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-blue-500"></div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="text-5xl font-bold mb-4">-40 ₽</div>
            <div className="text-muted-foreground text-lg mb-8">Без комиссии</div>

            <div className="mb-8">
              <div className="text-2xl font-semibold mb-2">Руслан Туйчибекович С.</div>
              <div className="text-muted-foreground">В Сбербанк через СБП по номеру</div>
              <div className="text-muted-foreground">+7 996 588-12-34</div>
            </div>

            <div className="flex justify-center gap-8 mb-8">
              <button className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Receipt" size={24} className="text-foreground" />
                </div>
                <span className="text-sm">Квитанция</span>
              </button>

              <button className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Star" size={24} className="text-foreground" />
                </div>
                <span className="text-sm">Шаблон</span>
              </button>

              <button className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-foreground" />
                </div>
                <span className="text-sm">Автоплатеж</span>
              </button>
            </div>

            <div className="bg-secondary/50 rounded-2xl p-4 flex items-center gap-3 hover:bg-secondary transition-colors cursor-pointer">
              <div className="text-4xl">💸</div>
              <div className="flex-1 text-left">
                <div className="text-sm leading-tight">
                  Когда все в Альфа-Банке, переводы удобнее: зовите близких, получите до 7000 ₽ за совет
                </div>
              </div>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </div>
          </div>
        </div>

        <Button 
          onClick={handleClose}
          className="w-full h-14 text-lg font-medium mt-8 bg-secondary hover:bg-muted text-foreground rounded-2xl"
        >
          Готово
        </Button>
      </div>
    </div>
  );
};

export default Index;
