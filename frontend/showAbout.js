function showAbout(){
    const mainContent = document.querySelector('.main-content')
    const ahmedDiv = document.createElement('div')
    const twasDetails = document.createElement('p')

    twasDetails.id = 'about-p'
    twasDetails.textContent = 'Der Ich-Erzähler des Romans ist der Sonderling Oskar Matzerath. Er kommt 1924 in Danzig zur Welt. Zu diesem Zeitpunkt soll sein Verstand laut Selbstauskunft bereits vollständig entwickelt sein. Da er seit seinem dritten Geburtstag nicht mehr wächst, kann er somit als scheinbar "ewiges Kind" aus der Perspektive von unten über die Welt der Erwachsenen berichten. Dank seiner Blechtrommel kann er sich auch Ereignisse, an denen er nicht unmittelbar beteiligt war, vergegenwärtigen und so etwa auch darüber berichten, wie seine Mutter auf einem kaschubischen Kartoffelacker gezeugt wurde. (Ein ähnliches Motiv von einer berichtenden Trommel findet sich bereits in Heinrich Heines „Ideen. Das Buch le Grand.“) Damit wird Oskar zeitweise zu einer Art auktorialem Erzähler, der sich auch häufig in der dritten Person als „Oskar“ anspricht. Der Perspektivenwechsel von der ersten zur dritten Person und vice versa ist eine der tragenden erzählstrukturellen Kunstgriffe des Romans. Oskar sagt von sich selbst, er habe zu jenen „hellhörigen Säuglingen gehört“, deren „geistige Entwicklung schon bei der Geburt abgeschlossen ist und sich fortan nur bestätigen muss“. Er verweigert sich der Welt der Erwachsenen und beschließt im Alter von drei Jahren, nicht mehr zu wachsen. Gleichwohl fühlt er sich, da „innerlich und äußerlich vollkommen fertig“, den Erwachsenen weit überlegen. An seinem dritten Geburtstag bekommt er von seiner Mutter eine Blechtrommel geschenkt, die zu seinem ständigen Begleiter wird. Oskar Matzerath ist ein "unzuverlässiger Erzähler" der Wahrheitsgehalt von Oskars Geschichten erscheint oft zweifelhaft. Zunächst ist er zum Zeitpunkt, an dem sein Bericht 1952 beginnt, Insasse einer Heil- und Pflegeanstalt und als solcher möglicherweise verrückt und demnach nicht sehr vertrauenswürdig. Außerdem bleibt unsicher, ob er nicht mehr wächst, weil er die Kellertreppe hinabfiel, oder ob er aus eigenem Entschluss das Wachstum einstellte und den Kellersturz nur fingierte, um Fragen zu vermeiden. Auch seine Selbstvorwürfe, er sei schuld am Tod seiner Eltern und an dem seines Onkels Jan Bronski, werden durch den Verlauf der Handlung kaum erhärtet. Damit steht aber die Glaubwürdigkeit aller seiner Erzählungen in Frage.'

    mainContent.append(ahmedDiv)
    ahmedDiv.append(twasDetails)
}

showAbout()