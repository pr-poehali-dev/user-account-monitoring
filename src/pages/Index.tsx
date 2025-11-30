import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-6">
          <div className="text-center space-y-4 mb-12">
            <Badge className="mx-auto bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
              Официальное уведомление
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight">
              Информация об аккаунте
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Статус учётной записи пользователя @Sotka_ebeTT
            </p>
          </div>

          <Alert className="bg-destructive/10 border-destructive">
            <Icon name="AlertTriangle" className="h-5 w-5 text-destructive" />
            <AlertDescription className="text-destructive font-semibold ml-2">
              Внимание! Данная учётная запись находится под контролем правоохранительных органов Российской Федерации
            </AlertDescription>
          </Alert>

          <Card className="p-8 shadow-lg border-2 border-primary/20">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Shield" className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-secondary mb-3">
                    Статус аккаунта
                  </h2>
                  <p className="text-foreground leading-relaxed">
                    Аккаунт пользователя <span className="font-bold text-primary">@Sotka_ebeTT</span> рассматривается 
                    и ведёт учёт в архиве Внутренних дел Российской Федерации. Учётная запись защищается 
                    правоохранительными органами в рамках действующего законодательства.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Icon name="FileText" className="h-8 w-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-secondary mb-3">
                    Защита правоохранительными органами
                  </h2>
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <div className="flex items-start space-x-3">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>
                        Аккаунт находится под контролем и защитой МВД РФ с целью обеспечения 
                        соблюдения законности и правопорядка
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>
                        Все переписки и действия с данной учётной записью фиксируются и архивируются 
                        в соответствии с требованиями законодательства РФ
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p>
                        Данные учётной записи используются исключительно в рамках оперативно-розыскной 
                        деятельности и защищены от несанкционированного доступа
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-lg bg-muted/50">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-muted-foreground/10 p-3 rounded-full">
                  <Icon name="MessageSquareOff" className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-secondary mb-3">
                    Важная информация
                  </h2>
                  <div className="space-y-3 text-foreground leading-relaxed">
                    <p className="font-semibold">
                      Все чаты и переписки не имеют отношения к владельцу данной учётной записи.
                    </p>
                    <p>
                      Любые сообщения, отправленные на этот аккаунт или от его имени, рассматриваются 
                      в рамках проводимых мероприятий и не являются личной коммуникацией пользователя.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Информация размещена в соответствии с требованиями законодательства Российской Федерации
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="bg-slate-200 p-6 rounded-lg border border-slate-300">
            <div className="flex items-start space-x-4">
              <Icon name="Info" className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-secondary mb-2">
                  Контактная информация и разъяснения
                </p>
                <p>
                  По вопросам, связанным с данной учётной записью, необходимо обращаться 
                  в соответствующие правоохранительные органы Российской Федерации согласно 
                  установленному порядку делопроизводства.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
