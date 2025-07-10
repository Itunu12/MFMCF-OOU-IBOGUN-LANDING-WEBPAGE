import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  BookOpen,
  Target,
  Globe,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              About Our Fellowship
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Discover the heart, mission, and vision behind MFMCF OOU Ibogun -
              where faith meets purpose and students become world changers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-purple-100 text-purple-800">
                    Our Mission
                  </Badge>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Transforming Lives Through Christ
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    MFMCF OOU Ibogun exists to create a vibrant community of
                    students who are passionate about following Jesus Christ. We
                    are committed to spiritual growth, academic excellence, and
                    impacting our campus and community with the transformative
                    love of God.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our fellowship serves as a beacon of hope, providing
                    spiritual guidance, academic support, and a loving community
                    for students navigating their university journey and
                    preparing for their destiny.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Spiritual Growth",
                    "Academic Excellence",
                    "Community Impact",
                    "Leadership Development",
                  ].map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-4 py-2 border-purple-200 text-purple-700 hover:bg-purple-50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <Image
                  src="/abt-img-1.png?height=500&width=600"
                  alt="Students praying together in fellowship"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 md:order-1">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl blur-3xl opacity-20 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <Image
                  src="/abt-img-2.jpg?height=500&width=600"
                  alt="Bible study session with students"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-8 order-1 md:order-2">
                <div>
                  <Badge className="mb-4 bg-pink-100 text-pink-800">
                    Our History
                  </Badge>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    A Legacy of Faith and Excellence
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Founded with the vision of reaching students at Olabisi
                    Onabanjo University, our fellowship has been a beacon of
                    hope and spiritual guidance for over 15 years. We have
                    witnessed countless testimonies of transformation, academic
                    breakthroughs, and life-changing encounters with God.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We believe in the power of prayer, the authority of God's
                    Word, and the importance of Christian fellowship. Through
                    various programs and activities, we have prepared students
                    for leadership both in the church and society, creating a
                    lasting impact that extends far beyond the campus walls.
                  </p>
                </div>
                <Link href="/events">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    See Our Events
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">
              Our Foundation
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Values That Guide Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles shape everything we do and define who
              we are as a fellowship
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Faith & Love",
                description:
                  "Unwavering trust in God's Word and demonstrating Christ's love through our actions and relationships",
                gradient: "from-purple-500 to-purple-700",
                bgGradient: "from-purple-50 to-purple-100",
              },
              {
                icon: Target,
                title: "Excellence & Integrity",
                description:
                  "Pursuing excellence in all areas of life while maintaining the highest standards of integrity",
                gradient: "from-pink-500 to-pink-700",
                bgGradient: "from-pink-50 to-pink-100",
              },
              {
                icon: Users,
                title: "Unity & Fellowship",
                description:
                  "Building authentic relationships and fostering unity among believers from diverse backgrounds",
                gradient: "from-purple-600 to-pink-600",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: BookOpen,
                title: "Growth & Learning",
                description:
                  "Continuous spiritual growth through God's Word and commitment to lifelong learning",
                gradient: "from-indigo-500 to-purple-600",
                bgGradient: "from-indigo-50 to-purple-50",
              },
              {
                icon: Globe,
                title: "Service & Impact",
                description:
                  "Serving our community and making a positive impact in our campus, nation, and the world",
                gradient: "from-pink-500 to-purple-500",
                bgGradient: "from-pink-50 to-purple-50",
              },
              {
                icon: Award,
                title: "Leadership & Mentorship",
                description:
                  "Developing godly leaders and providing mentorship for the next generation of believers",
                gradient: "from-purple-500 to-indigo-500",
                bgGradient: "from-purple-50 to-indigo-50",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${value.bgGradient} hover:-translate-y-2`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse-glow`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">
              Meet Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Passionate Leaders Serving God
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated leadership team is committed to guiding, mentoring,
              and supporting every member of our fellowship
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Brother Tioluwani",
                role: "Fellowship President",
                image: "/Pressi.png?height=300&width=300",
                description: "Leading with passion and dedication for Christ",
              },
              {
                name: "Brother Itunu",
                role: "Vice President",
                image: "/VP.jpg?height=300&width=300",
                description: "Empowering and mentoring young Men in faith",
              },
              {
                name: "Brother Boluwatife",
                role: "General Secretary",
                image: "/Gensec.png?height=300&width=300",
                description: "Passionate about developing the next generation",
              },
            ].map((leader, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2"
              >
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={120}
                      height={120}
                      className="w-30 h-30 rounded-full object-cover relative z-10 border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {leader.name}
                  </CardTitle>
                  <p className="text-purple-600 font-semibold">{leader.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse-glow" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Become Part of Our Story
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Your journey of faith, growth, and purpose begins here. Join a
              community that will support, challenge, and celebrate with you
              every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/join">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Join Our Fellowship
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-black hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
