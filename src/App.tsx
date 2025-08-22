import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import "./App.css"

function App() {
  const whatsapp = "5599999999999"
  const waMsg = encodeURIComponent("Olá! Vim do Instagram e quero saber mais.")
  const waLink = `https://wa.me/${whatsapp}?text=${waMsg}`

  const checkoutLink = "/checkout"
  const instagramProfile = "https://instagram.com/seu_perfil"

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="px-4 pt-10 pb-6 max-w-5xl mx-auto text-center">
        <Badge className="mb-3">Oferta exclusiva do Instagram</Badge>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Transforme seu negócio com nosso serviço premium
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Resultados rápidos, processo simples e acompanhamento de ponta a ponta.
        </p>
        <div className="mt-5 flex justify-center gap-3 flex-wrap">
          <Button asChild>
            <a href={checkoutLink}>Quero garantir agora</a>
          </Button>
          <Button asChild variant="outline">
            <a href={waLink}>Falar no WhatsApp</a>
          </Button>
        </div>

        <div className="relative mt-8 w-full max-w-3xl aspect-video mx-auto rounded-xl overflow-hidden ring-1 ring-slate-200">
          <img
            src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1600&auto=format&fit=crop"
            alt="Seu produto/serviço"
            className="object-cover w-full h-full"
          />
        </div>

        <ul className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
          <li>Garantia de 7 dias</li>
          <li>•</li>
          <li>Pagamento seguro</li>
          <li>•</li>
          <li>Atendimento por WhatsApp</li>
        </ul>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      <section className="px-4 py-8 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Por que escolher a gente</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Resultado em dias</CardTitle>
              <CardDescription>Plano claro com metas semanais</CardDescription>
            </CardHeader>
            <CardContent className="text-slate-600">
              Você vê progresso mensurável já na primeira semana.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Suporte premium</CardTitle>
              <CardDescription>Canal direto no WhatsApp</CardDescription>
            </CardHeader>
            <CardContent className="text-slate-600">
              Nada de fila. Resposta rápida e soluções práticas.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sem burocracia</CardTitle>
              <CardDescription>Onboarding em 10 minutos</CardDescription>
            </CardHeader>
            <CardContent className="text-slate-600">
              Assine, responda um formulário curto e comece imediatamente.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-6 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>O que clientes dizem</CardTitle>
            <CardDescription>Mais de 200+ atendimentos realizados</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <blockquote className="text-sm text-slate-700">
              “Triplicamos os leads em duas semanas.”
              <span className="block mt-2 text-slate-500">— Ana</span>
            </blockquote>
            <blockquote className="text-sm text-slate-700">
              “Excelente retorno sobre o investimento.”
              <span className="block mt-2 text-slate-500">— Lucas</span>
            </blockquote>
            <blockquote className="text-sm text-slate-700">
              “Execução consistente e estratégia clara.”
              <span className="block mt-2 text-slate-500">— Beatriz</span>
            </blockquote>
          </CardContent>
        </Card>
      </section>

      <section className="px-4 pb-24 max-w-5xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Plano Start</CardTitle>
                <Badge variant="secondary">Mais popular</Badge>
              </div>
              <CardDescription>Perfeito para validar e escalar</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                <li>• Estratégia personalizada</li>
                <li>• 2 sprints de implementação</li>
                <li>• Relatórios semanais</li>
                <li>• Suporte WhatsApp</li>
              </ul>
              <p className="mt-4 text-3xl font-bold">
                R$ 997<span className="text-base font-normal text-slate-500"> / único</span>
              </p>
            </CardContent>
            <CardFooter className="gap-3">
              <Button asChild className="w-full">
                <a href={checkoutLink}>Comprar agora</a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href={waLink}>Tirar dúvidas</a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Como funciona</CardTitle>
              <CardDescription>Rápido e sem fricção</CardDescription>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-3">
              <p><strong>1.</strong> Faça o pagamento e receba o link do onboarding.</p>
              <p><strong>2.</strong> Preencha o formulário (10 minutos).</p>
              <p><strong>3.</strong> Agende a call de kick-off.</p>
              <p><strong>Prazo:</strong> primeiras entregas em até 7 dias úteis.</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary">
                <a href={instagramProfile}>Ver mais no Instagram</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}

export default App
