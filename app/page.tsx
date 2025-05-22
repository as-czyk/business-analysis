import Image from "next/image";
import { Card } from "@/components/ui/card";

import Logo from "../public/l_one_systems_logo.jpeg";
import { BusinessTimeline } from "@/components/custom/business-timeline";
import { TopicCluster } from "./components/custom/TopicCluster";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-[#f3eef0] shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src={Logo}
                alt="Business Analysis Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex flex-col gap-8">
        {/* Introduction */}
        <section>
          <Card className="p-12">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Einführung
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  Im Rahmen dieses Projekts wurde die Business-Analyse für das
                  Softwareprojekt <i>Frontpanel-Desginer</i> kritisch
                  reflektiert und bewertet. Die Webanwendung ermöglicht es
                  Nutzern, individuelle Frontpanels für elektronische Geräte zu
                  gestalten und direkt zu bestellen. Ziel dieser Ausarbeitung
                  ist es, den durchgeführten Business-Analyse-Prozess sowohl im
                  Hinblick auf seine Stärken als auch auf mögliche
                  Verbesserungspotenziale zu untersuchen.
                </p>
                <p className="text-gray-600">
                  Dabei habe ich zentrale Elemente der Business-Analyse
                  beleuchtet, darunter Zieldefinition,
                  Stakeholder-Kommunikation, Anforderungserhebung, eingesetzte
                  Methoden und Werkzeuge sowie die Dokumentation und
                  Nachvollziehbarkeit.
                </p>
              </div>
              <div>
                <BusinessTimeline />
              </div>
            </div>
          </Card>
        </section>

        {/* 1. Zieldefinition und Problemverständnis */}
        <section>
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🎯 1. Zieldefinition und Problemverständnis
            </h3>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Leitfragen:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Wurden die Projektziele klar und messbar definiert?</li>
                <li>
                  Ist das zugrundeliegende Geschäftsproblem vollständig
                  verstanden und dokumentiert?
                </li>
                <li>Ist der Projektumfang klar abgegrenzt?</li>
              </ul>
            </div>

            <div className="relative bg-purple-50 border border-purple-200 rounded-2xl p-6 mt-4 mb-2 shadow-sm">
              <p className="text-gray-600 mb-3">
                Insgesamt empfinde ich die Zieldefinition im Projekt als
                inhaltlich sehr gut. Die Beschreibung deckt sowohl funktionale
                als auch nicht-funktionale Anforderungen klar ab. Besonders
                positiv finde ich, dass nicht nur die Hauptfunktion der Webapp
                berücksichtigt wurden, sondern auch weiterführende technische
                Aspekte wie die Entwicklung eines CNC-Konverters zur
                Produktionsautomatisierung. Auch die Multi-Anbieter-Fähigkeit
                sowie die geplante Anbindung an externe Shopsysteme zeigen, dass
                strategische Überlegungen über die erste Anwendungsversion
                hinaus bereits mitgedacht wurden.
              </p>
              <p className="text-gray-600 mb-3">
                Gleichzeitig sehe ich auch Verbesserungspotenzial in der Art und
                Weise, wie die Ziele formuliert wurden. Mir fehlt die klare
                Priorisierung der Ziele – insbesondere in Bezug auf die
                Abgrenzung zwischen kurzfristig notwendigen Funktionen und
                langfristigen Erweiterungen. Auch die konkrete Zielgruppe bleibt
                für mich recht vage. Ich fände es hilfreich, klarer zu
                definieren, welche Nutzenden angesprochen werden sollen und
                welches konkrete Problem für sie gelöst wird. Vielleicht könnten
                wir uns auch überlegen, eine strategische Einordnung
                aufzunehmen, um das <i>Warum</i> hinter dem Projekt noch besser
                nachvollziehen zu können. Bedeutet für mich in Form von einer
                Zuordnung von dem <i>Value</i> der Software bzw. des
                Softwareproduktes zu einer konkreten Zielgruppe.
              </p>
            </div>
          </Card>
        </section>

        {/* 2. Stakeholder und Kommunikation */}
        <section>
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              👥 2. Stakeholder und Kommunikation
            </h3>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Leitfragen:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  Wurden alle relevanten Stakeholder identifiziert und
                  klassifiziert?
                </li>
                <li>
                  Gibt es eine klare Kommunikationsstrategie für verschiedene
                  Stakeholdergruppen?
                </li>
                <li>
                  Wurden die Erwartungen und Anforderungen der Stakeholder
                  systematisch erfasst?
                </li>
              </ul>
            </div>

            <div className="relative bg-purple-50 border border-purple-200 rounded-2xl p-6 mt-4 mb-2 shadow-sm">
              <p className="text-gray-600 mb-3">
                Was mir sehr gut gefallen hat, sind die Interviews mit Frank
                Röllen selbst (auch wenn ich mir nicht die vollen 3:30 Stunden
                angesehen habe 😂). Aus meiner Sicht ist die Stakeholderanalyse
                mit Herr Röllen selbst als Stakeholder ziemlich gut abgedeckt.
              </p>
              <p className="text-gray-600 mb-3">
                Zusätzlich ist positiv, dass Frank die Konkurrenzsoftware selbst
                nutzt und somit auch für die zu entwicklenden Anforderungen als
                verlässlicher Ansprechpartner dienen kann. Gleichzeitig soll die
                Software aber auch{" "}
                <i>von mehreren Anbietern genutzt werden [...].</i> Das bedeutet
                aus meiner Sicht, neben den Kunden, die über die Software die
                Panels designen sollen, mindestens noch eine weitere Stakeholder
                Gruppe, die ich als noch nicht abgedeckt sehe. Gleichzeitig kann
                man hier aber auch argumentieren, dass Frank gewissermaßen auch
                die Rolle eines Anbieters einnimmt.
              </p>
            </div>
          </Card>
        </section>

        {/* 3. Anforderungserhebung */}
        <section>
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📋 3. Anforderungserhebung
            </h3>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Leitfragen:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  Wurden funktionale und nicht-funktionale Anforderungen klar
                  unterschieden und dokumentiert?
                </li>
                <li>
                  Sind die Anforderungen vollständig, konsistent und testbar
                  formuliert?
                </li>
                <li>Wurden Prioritäten für die Anforderungen festgelegt?</li>
              </ul>
            </div>

            <div className="relative bg-purple-50 border border-purple-200 rounded-2xl p-6 mt-4 mb-2 shadow-sm">
              <p className="text-gray-600 mb-3">
                Die Anforderungserhebung sind schon wirklich sehr umfangreich
                und detailliert. Gut finde ich, dass sowohl technische
                Anforderungen (z. B. DXF-Export auf einem bestimmten Layer) als
                auch funktionale Aspekte (z. B. Benutzerinteraktion im
                2D-/3D-Modell) vollständig berücksichtigt wurden. Insgesamt
                finde ich auch die Zuordnung zu größeren Arbeitspaketen (z.B
                Kantenradius oder Edge machining) sehr gut gelungen.
              </p>
              <p className="text-gray-600 mb-3">
                Der Detaillierungsgrad einzelner Anforderungen ist aus meiner
                Sicht teilweise so hoch, dass es schwerfällt, das große Ganze zu
                erkennen oder Prioritäten zu setzen. Es entsteht der Eindruck,
                dass alles gleich wichtig ist – was in der Entwicklung später zu
                Unklarheiten oder Ressourcenengpässen führen könnte. Dadruch,
                dass die Anforderungen insgesamt sehr von Frank bzw. der
                Konkurrenzsoftware abhängen, sind diese vielleicht methodisch
                etwas einseitig dargestellt. Weiterhin könnten wir uns auch
                überlegen, die Anforderungen innerhalb von Epics zu
                strukturieren.
              </p>
              <p className="text-gray-600 mb-3">
                Was aus meiner Sicht auch noch fehlt, sind die Anforderungen
                fernab der Business Logik. In diesem Fall also z.B die
                Anforderungen, dass die Software verschiedene Rollen- und
                Rechtekonfigurationen für verschiende Nutzergruppen benötigt.
                Ich sehe in den Anforderungen immer das <i>Admin Backend</i>,
                würde es aber in einer seperaten Story nochmal mitaufnehmen.
              </p>
            </div>
          </Card>
        </section>

        {/* 4. Analyse Methodik und Werkzeuge */}
        <section>
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🛠️ 4. Analyse Methodik und Werkzeuge
            </h3>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Leitfragen:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  Wurden geeignete Analysemethoden für die Geschäftsprozesse
                  ausgewählt?
                </li>
                <li>
                  Sind die eingesetzten Werkzeuge für die Analyse angemessen und
                  effektiv?
                </li>
              </ul>
            </div>

            <div className="relative bg-purple-50 border border-purple-200 rounded-2xl p-6 mt-4 mb-2 shadow-sm">
              <p className="text-gray-600 mb-3">
                Was ich sehr gelungen finde ist die Aufteilung zwischen MVP
                Umfang und dem Umfang der dann fertigen Software. Generell würde
                ich auch garkein Projekt annehmen ohne diesen
                Validierungsschritt mit einem MVP. Auch die Termine bzw.
                Interviews die Fabian mit Frank geführt hat, finde ich als
                Methode eigentlich unersetzbar.
              </p>
              <p className="text-gray-600 mb-3">
                Letztlich können wir vielleicht auch hier eine zusätzliche
                strukturiertere Form mitaufnehmen (zusätzlich zu den
                qualitativen Interviews). Mir schwebt hier so etwas wie ein
                Entscheidungsbaum vor, der verschiedene Variationen eines
                Projektes abdeckt und somit die qualitativen Daten aus dem
                Interview gewissermaßen quantitifiziert.
              </p>
            </div>
          </Card>
        </section>

        {/* 6. Dokumentation und Nachvollziehbarkeit */}
        <section>
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📑 5. Dokumentation und Nachvollziehbarkeit
            </h3>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Leitfragen:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  Ist die Dokumentation vollständig, strukturiert und
                  verständlich?
                </li>
                <li>
                  Sind Entscheidungen und deren Begründungen nachvollziehbar
                  dokumentiert?
                </li>
              </ul>
            </div>

            <div className="relative bg-purple-50 border border-purple-200 rounded-2xl p-6 mt-4 mb-2 shadow-sm">
              <p className="text-gray-600 mb-3">
                Grundsätzlich finde ich die Dokumentation schon ganz gelungen.
                Gerade für den Start der Analyse denke ich auch das Tools wie
                Figma für die Darstellung und auch die Dokumentation gut
                funktionieren, da vieles noch unklar ist und diese Tools eine
                gewisse Fexibilität bieten.
              </p>
              <p className="text-gray-600 mb-3">
                Im weiteren Verlauf der Analyse würde ich mir aber (spätestens
                für die Anforderungerhebung) eine strukturiertere Form wünschen.
                Ich denke, dass wir ab einem bestimmten Punkt in unserem Analyse
                Prozess in einer strukturiertere Form überführen müssen. So
                könnten wir auch bei der Vertragserstellung auf eine bestimmte
                Version der Analyse verweisen, die dann als Grundlage für das
                Projekt dient. Dadurch wäre auch eine Nachvollziehbarkeit
                (Versionskontrolle) gegeben.
              </p>
            </div>
          </Card>
        </section>

        {/* Fazit und Handlungsempfehlungen */}
        <section>
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Wie machen wir mit Frank weiter?
            </h3>

            <div className="mb-6">
              <p className="text-gray-600 mb-3">
                In der Mail von Frank, stecken aus meiner Sicht nochmal einige
                Fallstricke. In meine Augen geht es also darum, in dem nächsten
                Termin konkret mit Frank herauszuarbeiten, welche Punkte aus der
                Mail in die Projektplanung aufgenommen werden sollen. Aus meiner
                Sicht ist gerade das Thema der Versionskontrolle von den
                erstellten Designs inkl. des Rechtesystems ein größerer
                Komplexitätsfaktor. Die Software dann zusätzlich auch als
                Desktop App bzw. als PWA bereitzustellen geht in die gleiche
                Richtung. Das sollten wir ihm klarmachen.
              </p>
              <p className="text-gray-600 mb-3">
                Ich würde wahrscheinlich die Mail in einer Folie nochmal
                aufbereiten:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-4">
                <li>
                  <b>Konkrete Ideen / Vorschläge</b>
                </li>
                <li>
                  <b>Offene Problem / Risiken</b>
                </li>
                <li>
                  <b>Wünsche / Visionen</b>
                </li>
              </ul>
              <p className="text-gray-600 mb-3 mt-4">
                Diese Themencluster würde ich mit ihm besprechen:
              </p>
              <div className="flex flex-wrap gap-4">
                <TopicCluster
                  color="bg-purple-200"
                  borderColor="border-purple-400"
                >
                  Datei-Verwaltung
                </TopicCluster>
                <TopicCluster
                  color="bg-orange-200"
                  borderColor="border-orange-400"
                >
                  Offline-Fähigkeit
                </TopicCluster>
                <TopicCluster color="bg-red-200" borderColor="border-red-400">
                  Bestellprozess
                </TopicCluster>
                <TopicCluster color="bg-blue-200" borderColor="border-blue-400">
                  Integration in JTL-Shop
                </TopicCluster>
              </div>
              <p className="text-gray-600 mb-3 mt-4"></p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">
                Zentrales Ziel für den nächsten Termin
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-4">
                <li>
                  Wie soll mit fehlerhaften Bestellungen künftig umgegangen
                  werden?
                </li>
                <li>
                  Welche Verantwortung trägt der Kunde, welche der Anbieter?
                </li>
                <li>
                  Welche Rolle spielt Offline-Nutzung – „Nice to have“ oder
                  „Must-have“?
                </li>
                <li>Welche Shop-Integration ist für MVP notwendig?</li>
              </ul>
            </div>
          </Card>
        </section>
        <section>
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Fazit</h3>

            <div className="relative bg-purple-50 border border-purple-200 rounded-2xl p-6 mt-4 mb-2 shadow-sm">
              <p className="text-gray-600 mb-3">
                Alles in allem finde ich die Business Analyse schon gut gelungen
                für ein aus meiner Sicht schon eher <i>nichiges</i>
                Softwareprodukt. Ganz allgemein habe ich noch ein paar Ideen /
                Anmerkungen zum Business Analyse Prozess im allgemeinen:
              </p>
              <p className="text-gray-600 mb-3">
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-4">
                  <li>
                    <b>Iteratives Vorgehen:</b>
                    Es geht hier ja um Software zum Fixpreis. Demnach müssen
                    alle Anforderungen im Vorfeld sehr gut definiert werden.
                    Trotzdem halte ich es für wichtig ein wenig Iteration in den
                    Prozess mitaufnzunehmen. Eine kontrollierte Möglichkeit zur
                    Anpassung – etwa über klar definierte Feedbackschleifen oder
                    optionale Change Requests – kann helfen, spätere
                    Fehlentwicklungen zu vermeiden und die Software näher an den
                    tatsächlichen Bedürfnissen der Nutzer auszurichten.
                  </li>
                  <li>
                    <b>Prototypen:</b>
                    Ein weiterer zentraler Punkt ist aus meiner Sicht die
                    frühzeitige Einbindung eines funktionalen Prototyps oder
                    MVPs (Minimum Viable Product) in den
                    Business-Analyse-Prozess. Gerade bei komplexen, interaktiven
                    Anwendungen wie einem Frontplatten-Konfigurator ist es
                    essenziell, dass reale Nutzer möglichst frühzeitig mit einem
                    ersten klickbaren oder funktionsfähigen System interagieren
                    können. Je früher dieser „Reality-Check“ erfolgt, desto
                    zielgerichteter und realistischer kann die Business-Analyse
                    erfolgen
                  </li>
                </ul>
              </p>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© 2024 Business Analysis Feedback. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
