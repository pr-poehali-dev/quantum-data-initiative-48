import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какие протоколы и устройства поддерживает TC IoT?",
      answer:
        "Платформа поддерживает MQTT, HTTP/HTTPS, WebSocket, Modbus TCP/RTU, OPC-UA, CoAP и более 200 типов устройств от ведущих производителей: Siemens, Schneider Electric, Honeywell, Arduino, Raspberry Pi и другие.",
    },
    {
      question: "Сколько времени занимает подключение первых устройств?",
      answer:
        "Базовое подключение первых устройств занимает от 15 минут. Полноценная интеграция с существующими системами (ERP, SCADA, BI) настраивается за 1–3 дня с помощью нашей команды поддержки.",
    },
    {
      question: "Как обеспечивается безопасность данных?",
      answer:
        "Все данные передаются по зашифрованным каналам TLS 1.3. Аутентификация устройств выполняется по X.509 сертификатам. Данные хранятся в изолированной инфраструктуре с разграничением доступа по ролям.",
    },
    {
      question: "Работает ли платформа при отсутствии интернета?",
      answer:
        "Да, TC IoT поддерживает режим Edge Computing — локальная обработка данных продолжается при потере связи с облаком. Данные синхронизируются автоматически при восстановлении соединения.",
    },
    {
      question: "Можно ли интегрировать с нашей существующей ERP/SCADA?",
      answer:
        "Да, платформа предоставляет REST API и готовые коннекторы для 1С, SAP, Microsoft Dynamics, а также популярных SCADA-систем. Интеграция выполняется без изменения текущей инфраструктуры.",
    },
    {
      question: "Какова стоимость и модель лицензирования?",
      answer:
        "Модель подписки — оплата за количество подключённых устройств. Есть бесплатный период на 30 дней для тестирования. Свяжитесь с нами для расчёта стоимости под ваш объём устройств.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о возможностях, безопасности и внедрении TC IoT.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
