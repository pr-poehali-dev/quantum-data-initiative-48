import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Морозов",
    role: "Директор по производству, Промтех",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Подключили 400 станков за одну неделю. Количество незапланированных простоев снизилось на 45% — результат, которого мы ждали годами.",
  },
  {
    name: "Елена Кузнецова",
    role: "Руководитель ИТ, LogiGroup",
    avatar: "/professional-woman-scientist.png",
    content:
      "TC IoT интегрировался с нашей ERP-системой без единой строчки кастомного кода. Мониторинг всего парка техники — в одном экране.",
  },
  {
    name: "Дмитрий Ван",
    role: "CTO, SmartBuilding Solutions",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Лучшее решение для умных зданий на рынке. Управляем 12 объектами из одной точки, экономия по энергии — 28% уже в первый квартал.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют лидеры рынка</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят компании, которые уже автоматизировали свои процессы с TC IoT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
