import { Card } from "@/components/ui/card";

interface TimelineItemProps {
  emoji: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem = ({
  emoji,
  title,
  description,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className="relative pl-10 pb-8">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-4 top-7 h-full w-0.5 bg-gray-300"></div>
      )}

      {/* Emoji circle */}
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-gray-300 text-xl">
        <span>{emoji}</span>
      </div>

      {/* Content */}
      <div className="pt-1">
        <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export function BusinessTimeline() {
  const timelineItems = [
    {
      emoji: "🎯",
      title: "Zieldefinition",
      description:
        "Festlegung der Projektziele und Abgrenzung des Problembereichs",
    },
    {
      emoji: "👥",
      title: "Stakeholder",
      description:
        "Identifikation und Analyse aller relevanten Interessengruppen",
    },
    {
      emoji: "📋",
      title: "Anforderungen",
      description:
        "Erhebung und Dokumentation funktionaler und nicht-funktionaler Anforderungen",
    },
    {
      emoji: "🛠️",
      title: "Methoden",
      description:
        "Auswahl und Anwendung geeigneter Analyse-Methoden und Werkzeuge",
    },
    {
      emoji: "📑",
      title: "Dokumentation",
      description:
        "Strukturierte Aufbereitung aller Ergebnisse und Entscheidungen",
      isLast: true,
    },
  ];

  return (
    <div>
      {timelineItems.map((item, index) => (
        <TimelineItem
          key={index}
          emoji={item.emoji}
          title={item.title}
          description={item.description}
          isLast={item.isLast}
        />
      ))}
    </div>
  );
}
