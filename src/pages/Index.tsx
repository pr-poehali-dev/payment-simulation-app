import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

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
        <Card className="w-full max-w-md p-8 text-center animate-scale-in shadow-lg">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Check" className="text-primary" size={48} />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-foreground">Оплата выполнена</h2>
          <p className="text-muted-foreground mb-4">
            Водитель {driverName} получил {amount} ₽
          </p>
          <p className="text-sm text-muted-foreground">Возврат к форме через несколько секунд...</p>
        </Card>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md p-8 text-center animate-scale-in shadow-lg">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin-slow"></div>
          </div>
          <h2 className="text-xl font-medium text-foreground">Обработка платежа...</h2>
          <p className="text-sm text-muted-foreground mt-2">Подождите несколько секунд</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 animate-fade-in shadow-lg">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Icon name="CreditCard" className="text-primary" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">TripPay</h1>
          <p className="text-muted-foreground text-sm">Оплата поездки</p>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="driver" className="text-foreground font-medium">
              Имя водителя
            </Label>
            <div className="relative">
              <Icon name="User" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                id="driver"
                placeholder="Введите имя водителя"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount" className="text-foreground font-medium">
              Сумма поездки
            </Label>
            <div className="relative">
              <Icon name="Wallet" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                id="amount"
                type="number"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-10 h-12 text-base"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">₽</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bank" className="text-foreground font-medium">
              Выберите банк
            </Label>
            <Select value={bank} onValueChange={setBank}>
              <SelectTrigger className="h-12 text-base" id="bank">
                <div className="flex items-center gap-2">
                  <Icon name="Building2" className="text-muted-foreground" size={20} />
                  <SelectValue placeholder="Выберите банк" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sber">Сбербанк</SelectItem>
                <SelectItem value="tinkoff">Тинькофф</SelectItem>
                <SelectItem value="alpha">Альфа-Банк</SelectItem>
                <SelectItem value="vtb">ВТБ</SelectItem>
                <SelectItem value="raiffeisen">Райффайзен</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handlePayment}
            className="w-full h-12 text-base font-medium mt-6 shadow-md hover:shadow-lg transition-all"
            size="lg"
          >
            <Icon name="Send" className="mr-2" size={20} />
            Оплатить
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Демонстрационный режим. Реальные платежи не совершаются.
        </p>
      </Card>
    </div>
  );
};

export default Index;
