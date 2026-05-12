import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Универсальный коннектор",
    description: "Поддержка протоколов MQTT, HTTP, WebSocket, Modbus и более 200 типов устройств без дополнительных настроек.",
    icon: "link",
    badge: "Протоколы",
  },
  {
    title: "Мониторинг в реальном времени",
    description: "Дашборды с живыми данными от всех подключённых устройств. Задержка менее 50 мс от датчика до экрана.",
    icon: "zap",
    badge: "Real-time",
  },
  {
    title: "Безопасная передача данных",
    description: "Сквозное шифрование TLS 1.3, аутентификация по сертификатам и контроль доступа на уровне устройства.",
    icon: "lock",
    badge: "Безопасность",
  },
  {
    title: "Умная аналитика",
    description: "ИИ-алгоритмы анализируют паттерны работы устройств, предсказывают отказы и оптимизируют потребление ресурсов.",
    icon: "brain",
    badge: "ИИ",
  },
  {
    title: "Масштабируемость",
    description: "От 10 до 100 000+ устройств без изменения архитектуры. Облачное развёртывание за 15 минут.",
    icon: "globe",
    badge: "Cloud",
  },
  {
    title: "Управление устройствами",
    description: "Удалённые команды, обновления прошивок OTA и конфигурация парка устройств из единого интерфейса.",
    icon: "target",
    badge: "OTA",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности платформы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Полный набор инструментов для интеграции, управления и анализа IoT-устройств
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "🧠"}
                    {feature.icon === "lock" && "🔒"}
                    {feature.icon === "globe" && "🌐"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "link" && "🔗"}
                    {feature.icon === "target" && "🎯"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
