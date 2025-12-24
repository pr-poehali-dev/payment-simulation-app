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
      <div className="max-w-xl mx-auto px-4 pt-4 pb-8">
        <button 
          onClick={handleClose}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors mb-6"
        >
          <Icon name="X" size={32} className="text-gray-500" strokeWidth={2} />
        </button>

        <div className="text-center mb-10">
          <h1 className="text-[28px] font-semibold mb-2 tracking-tight">Перевод выполнен</h1>
          <p className="text-gray-500 text-[17px]">Счёт списания ··1234</p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-20">
          <div className="bg-[#2a2a2a] px-5 py-2.5 rounded-[14px]">
            <span className="text-[22px] font-normal">900 ₽</span>
          </div>
          <Icon name="MoveRight" size={20} className="text-gray-600" strokeWidth={2.5} />
          <div className="bg-[#2a2a2a] px-5 py-2.5 rounded-[14px] flex items-center gap-2">
            <span className="text-[22px] font-normal">860 ₽</span>
            <Icon name="EyeOff" size={18} className="text-gray-500" strokeWidth={2.5} />
          </div>
        </div>

        <div className="bg-[#262626] rounded-[32px] px-6 py-10 relative">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <div className="relative">
              <div className="w-[120px] h-[120px] bg-[#22c55e] rounded-[28px] flex items-center justify-center shadow-2xl">
                <Icon name="Check" size={70} className="text-white" strokeWidth={3.5} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-[38px] h-[38px] bg-black rounded-full flex items-center justify-center border-[3px] border-[#262626]">
                <div className="w-[26px] h-[26px] rounded-full flex items-center justify-center" style={{
                  background: 'conic-gradient(from 180deg at 50% 50%, #ef4444 0deg, #8b5cf6 120deg, #3b82f6 240deg, #ef4444 360deg)'
                }}>
                  <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="text-[52px] font-bold mb-3 tracking-tight leading-none">-40 ₽</div>
            <div className="text-gray-500 text-[17px] mb-10">Без комиссии</div>

            <div className="mb-10">
              <div className="text-[22px] font-semibold mb-2 tracking-tight">Руслан Туйчибекович С.</div>
              <div className="text-gray-400 text-[15px] leading-relaxed">В Сбербанк через СБП по номеру</div>
              <div className="text-gray-400 text-[15px] leading-relaxed">+7 996 588-12-34</div>
            </div>

            <div className="flex justify-center gap-12 mb-8">
              <button className="flex flex-col items-center gap-2.5 hover:opacity-70 transition-opacity active:scale-95">
                <div className="w-[56px] h-[56px] bg-[#323232] rounded-full flex items-center justify-center">
                  <Icon name="FileText" size={26} className="text-white" strokeWidth={2} />
                </div>
                <span className="text-[13px] text-gray-300">Квитанция</span>
              </button>

              <button className="flex flex-col items-center gap-2.5 hover:opacity-70 transition-opacity active:scale-95">
                <div className="w-[56px] h-[56px] bg-[#323232] rounded-full flex items-center justify-center">
                  <Icon name="Star" size={26} className="text-white" strokeWidth={2} />
                </div>
                <span className="text-[13px] text-gray-300">Шаблон</span>
              </button>

              <button className="flex flex-col items-center gap-2.5 hover:opacity-70 transition-opacity active:scale-95">
                <div className="w-[56px] h-[56px] bg-[#323232] rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={26} className="text-white" strokeWidth={2} />
                </div>
                <span className="text-[13px] text-gray-300">Автоплатеж</span>
              </button>
            </div>

            <div className="bg-[#1f1f1f] rounded-[20px] p-4 flex items-center gap-3 hover:bg-[#252525] transition-colors cursor-pointer active:scale-[0.98]">
              <div className="text-[36px] leading-none">💸</div>
              <div className="flex-1 text-left">
                <div className="text-[13px] text-gray-300 leading-[1.4]">
                  Когда все в Альфа-Банке, переводы удобнее: зовите близких, получите до 7000 ₽ за совет
                </div>
              </div>
              <Icon name="ChevronRight" size={20} className="text-gray-600" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <Button 
          onClick={handleClose}
          className="w-full h-[56px] text-[17px] font-medium mt-6 bg-[#2a2a2a] hover:bg-[#323232] text-white rounded-[18px] shadow-none transition-colors active:scale-[0.98]"
        >
          Готово
        </Button>
      </div>
    </div>
  );
};

export default Index;
