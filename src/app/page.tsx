import { Settings, Wrench } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
              <Settings
                className="w-12 h-12 text-orange-600 animate-spin"
                style={{ animationDuration: '3s' }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Wrench className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            Site em Manutenção
          </h1>
          <p className="text-xl text-slate-600 max-w-lg mx-auto">
            Estamos trabalhando para melhorar sua experiência. Voltaremos em
            breve!
          </p>
        </div>

        <div className="space-y-2 text-slate-600">
          <p className="text-sm">Precisa de ajuda urgente?</p>
          <p className="text-sm">
            Entre em contato:{' '}
            <a
              href="tel:+55(11)91421-5301"
              className="font-medium text-blue-600"
            >
              (11) 91421-5301
            </a>
          </p>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            Obrigado pela sua paciência • © 2025 Quiropraxia Maõs que Curam
          </p>
        </div>
      </div>
    </div>
  );
}
