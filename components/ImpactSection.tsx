import Image from "next/image";

export default function ImpactSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/empower.svg"
              alt="Impact Illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">
              Making a Real Impact in Africa&apos;s Web3 Ecosystem
            </h2>
            <p className="text-gray-600">
              We&apos;re not just building technology; we&apos;re building
              Africa&apos;s digital future. Through our initiatives, we&apos;ve
              empowered countless developers and entrepreneurs.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-[#0066FF] mb-2">
                  500+
                </div>
                <div className="text-gray-600">Developers Trained</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#0066FF] mb-2">
                  50+
                </div>
                <div className="text-gray-600">Projects Launched</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#0066FF] mb-2">
                  20+
                </div>
                <div className="text-gray-600">Partners</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#0066FF] mb-2">5</div>
                <div className="text-gray-600">African Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
