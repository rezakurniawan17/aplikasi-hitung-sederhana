export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col text-center items-center gap-6">
      {children}
    </div>
  );
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-6">
      {children}
    </div>
  );
}

export function CardHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center flex flex-col gap-2">
      <h1 className="text-4xl font-bold uppercase tracking-wide">{title}</h1>
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  );
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}
