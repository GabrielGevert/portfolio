"use client";

import {
  Circle,
  Document,
  Font,
  Link,
  Page,
  Path,
  Rect,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";

const fontsBase = "/portfolio/fonts/satoshi";

Font.register({
  family: "Satoshi",
  fonts: [
    { src: `${fontsBase}/Satoshi-Regular.ttf`, fontWeight: 400 },
    { src: `${fontsBase}/Satoshi-Medium.ttf`, fontWeight: 500 },
    { src: `${fontsBase}/Satoshi-Bold.ttf`, fontWeight: 700 },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const colors = {
  bg: "#0E0E17",
  name: "#FFFFFF",
  text: "#E9E9F0",
  gray: "#BDBDBD",
  accent: "#9D8DF2",
  border: "#2E2E40",
};

const stroke = {
  stroke: colors.accent,
  strokeWidth: 2,
  fill: "none",
};

const SvgIcon = ({ children }: { children: React.ReactNode }) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 24 24"
    style={{ marginRight: 5 }}
  >
    {children}
  </Svg>
);

const icons = {
  pin: (
    <SvgIcon>
      <Path
        {...stroke}
        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"
      />
      <Circle {...stroke} cx={12} cy={10} r={3} />
    </SvgIcon>
  ),
  mail: (
    <SvgIcon>
      <Rect {...stroke} x={2} y={4} width={20} height={16} rx={2} />
      <Path {...stroke} d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </SvgIcon>
  ),
  phone: (
    <SvgIcon>
      <Path
        {...stroke}
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      />
    </SvgIcon>
  ),
  linkedin: (
    <SvgIcon>
      <Path
        {...stroke}
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      />
      <Rect {...stroke} x={2} y={9} width={4} height={12} />
      <Circle {...stroke} cx={4} cy={4} r={2} />
    </SvgIcon>
  ),
  github: (
    <SvgIcon>
      <Path
        {...stroke}
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      />
      <Path {...stroke} d="M9 18c-4.51 2-5-2-7-2" />
    </SvgIcon>
  ),
  globe: (
    <SvgIcon>
      <Circle {...stroke} cx={12} cy={12} r={10} />
      <Path {...stroke} d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <Path {...stroke} d="M2 12h20" />
    </SvgIcon>
  ),
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg,
    color: colors.gray,
    fontFamily: "Satoshi",
    fontSize: 10,
    lineHeight: 1.5,
    paddingVertical: 40,
    paddingHorizontal: 46,
  },
  name: { fontSize: 26, fontWeight: 700, color: colors.name, lineHeight: 1.25 },
  role: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.accent,
    marginTop: 2,
    marginBottom: 12,
    lineHeight: 1.3,
  },
  contactLine: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  contactsRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center" },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
    marginBottom: 3,
  },
  contactText: { fontSize: 9.5, color: colors.gray },
  contactLink: { fontSize: 9.5, color: colors.accent, textDecoration: "none" },
  section: {
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: colors.accent,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
  },
  summary: { fontSize: 10, color: colors.gray },
  item: { marginBottom: 12 },
  itemHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  itemRole: { fontSize: 11, fontWeight: 700, color: colors.name },
  itemPeriod: { fontSize: 9, color: colors.gray },
  itemCompany: { fontSize: 10, color: colors.accent, marginTop: 1, marginBottom: 5 },
  bulletRow: { flexDirection: "row", marginBottom: 2.5 },
  bulletDot: { width: 11, color: colors.accent },
  bulletText: { flex: 1, color: colors.gray },
  skillRow: { flexDirection: "row", marginBottom: 5 },
  skillLabel: { width: 120, color: colors.text, fontWeight: 700 },
  skillItems: { flex: 1, color: colors.gray },
});

interface CvItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

interface CvData {
  role: string;
  location: string;
  summaryTitle: string;
  summary: string;
  experienceTitle: string;
  experience: CvItem[];
  educationTitle: string;
  education: CvItem[];
  skillsTitle: string;
  skills: { label: string; items: string }[];
  languagesTitle: string;
  languages: { name: string; level: string }[];
}

const Bullets = ({ bullets }: { bullets: string[] }) => (
  <>
    {bullets.map((bullet, index) => (
      <View key={index} style={styles.bulletRow}>
        <Text style={styles.bulletDot}>•</Text>
        <Text style={styles.bulletText}>{bullet}</Text>
      </View>
    ))}
  </>
);

const ItemBlock = ({ item }: { item: CvItem }) => (
  <View style={styles.item} wrap={false}>
    <View style={styles.itemHead}>
      <Text style={styles.itemRole}>{item.role}</Text>
      <Text style={styles.itemPeriod}>{item.period}</Text>
    </View>
    <Text style={styles.itemCompany}>{item.company}</Text>
    {item.bullets.length > 0 && <Bullets bullets={item.bullets} />}
  </View>
);

export const CvDocument = ({ data }: { data: CvData }) => (
  <Document author="Gabriel Gevert" title="Gabriel Gevert - CV">
    <Page size="A4" style={styles.page}>
      <Text style={styles.name}>Gabriel Gevert</Text>
      <Text style={styles.role}>{data.role}</Text>

      <View style={styles.contactLine}>
        {icons.pin}
        <Text style={styles.contactText}>{data.location}</Text>
      </View>

      <View style={styles.contactsRow}>
        <View style={styles.contactItem}>
          {icons.mail}
          <Link style={styles.contactLink} src="mailto:gevertlolz@gmail.com">
            gevertlolz@gmail.com
          </Link>
        </View>
        <View style={styles.contactItem}>
          {icons.phone}
          <Link style={styles.contactLink} src="tel:+5541996790036">
            +55 (41) 99679-0036
          </Link>
        </View>
        <View style={styles.contactItem}>
          {icons.linkedin}
          <Link
            style={styles.contactLink}
            src="https://www.linkedin.com/in/gabrielgevert/"
          >
            in/gabrielgevert
          </Link>
        </View>
        <View style={styles.contactItem}>
          {icons.github}
          <Link style={styles.contactLink} src="https://github.com/GabrielGevert">
            GabrielGevert
          </Link>
        </View>
        <View style={styles.contactItem}>
          {icons.globe}
          <Link
            style={styles.contactLink}
            src="https://gabrielgevert.github.io/portfolio/"
          >
            Portfolio
          </Link>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{data.summaryTitle}</Text>
        <Text style={styles.summary}>{data.summary}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{data.experienceTitle}</Text>
        {data.experience.map((item) => (
          <ItemBlock key={`${item.company}-${item.period}`} item={item} />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{data.educationTitle}</Text>
        {data.education.map((item) => (
          <ItemBlock key={`${item.company}-${item.period}`} item={item} />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{data.skillsTitle}</Text>
        {data.skills.map((group) => (
          <View key={group.label} style={styles.skillRow} wrap={false}>
            <Text style={styles.skillLabel}>{group.label}</Text>
            <Text style={styles.skillItems}>{group.items}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{data.languagesTitle}</Text>
        {data.languages.map((lang) => (
          <View key={lang.name} style={styles.skillRow} wrap={false}>
            <Text style={styles.skillLabel}>{lang.name}</Text>
            <Text style={styles.skillItems}>{lang.level}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
