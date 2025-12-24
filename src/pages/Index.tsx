import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const banks = [
  { id: 'sber', name: 'Сбербанк', icon: 'Building2' },
  { id: 'tinkoff', name: 'Тинькофф', icon: 'Landmark' },
  { id: 'alpha', name: 'Альфа-Банк', icon: 'Building' },
  { id: 'vtb', name: 'ВТБ', icon: 'University' },
  { id: 'raiffeisen', name: 'Райффайзен', icon: 'Building2' },
];

const Index = () => {
  const [driverName, setDriverName] = useState('');
  const [amount, setAmount] = useState('');
  const [bank, setBank] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = () => {
    if (!driverName || !amount || !bank) {
      toast.error('Заполните все поля');
      return;
    }

    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setDriverName('');
        setAmount('');
        setBank('');
      }, 3000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-sm text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-[#ef3124] flex items-center justify-center">
              <Icon name="Check" className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-foreground">Готово</h2>
          <p className="text-muted-foreground text-base mb-2">
            {amount} ₽
          </p>
          <p className="text-sm text-muted-foreground">
            Водитель {driverName}
          </p>
        </div>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-sm text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-12 h-12 border-4 border-[#ef3124] border-t-transparent rounded-full animate-spin-slow"></div>
          </div>
          <h2 className="text-xl font-medium text-foreground">Оплата...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-sm mx-auto pt-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-[#ef3124] flex items-center justify-center">
              <Icon name="Car" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-foreground">TripPay</h1>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Label htmlFor="amount" className="text-sm text-muted-foreground mb-2 block">
              Сумма
            </Label>
            <div className="relative">
              <Input
                id="amount"
                type="number"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="h-14 text-2xl font-medium pr-12 border-0 bg-input focus-visible:ring-1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-muted-foreground">₽</span>
            </div>
          </div>

          <div>
            <Label htmlFor="driver" className="text-sm text-muted-foreground mb-2 block">
              Имя водителя
            </Label>
            <Input
              id="driver"
              placeholder="Иван Иванов"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              className="h-12 text-base border-0 bg-input focus-visible:ring-1"
            />
          </div>

          <div>
            <Label className="text-sm text-muted-foreground mb-3 block">
              Способ оплаты
            </Label>
            <div className="space-y-2">
              {banks.map((bankItem) => (
                <button
                  key={bankItem.id}
                  type="button"
                  onClick={() => setBank(bankItem.id)}
                  className={`w-full p-4 rounded-xl transition-all duration-150 flex items-center gap-3 ${
                    bank === bankItem.id
                      ? 'bg-[#ef3124] text-white shadow-md'
                      : 'bg-input hover:bg-secondary'
                  }`}
                >
                  <Icon 
                    name={bankItem.icon as any} 
                    size={20} 
                    className={bank === bankItem.id ? 'text-white' : 'text-muted-foreground'} 
                  />
                  <span className={`text-base font-medium ${bank === bankItem.id ? 'text-white' : 'text-foreground'}`}>
                    {bankItem.name}
                  </span>
                  {bank === bankItem.id && (
                    <Icon name="Check" className="ml-auto text-white" size={20} />
                  )}
                </button>
              ))}
            </div>
          </div>

          <Button 
            onClick={handlePayment}
            className="w-full h-14 text-base font-semibold mt-8 bg-[#ef3124] hover:bg-[#d62b1f] text-white rounded-xl shadow-lg"
            size="lg"
          >
            Оплатить
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-8">
          Демонстрационный режим
        </p>
      </div>
    </div>
  );
};

export default Index;
