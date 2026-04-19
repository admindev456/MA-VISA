
            <h3 className="font-semibold text-danger mb-2">
              Sanctions Implications
            </h3>
            <p className="text-sm text-neutral-700 mb-4">
              Several entities profiled above are designated under U.S. sanctions programs, 
              including OFAC's SDN List and the State Department's FTO designations. Engaging 
              in financial transactions with these entities—or their agents—constitutes a 
              potential violation of U.S. law.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-danger">Kata'ib Hezbollah (FTO)</span>
              <span className="badge badge-danger">IRGC-QF (FTO)</span>
              <span className="badge badge-danger">Ali Ghulam (OFAC)</span>
              <span className="badge badge-danger">Al Baidani (OFAC)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="flex justify-between mt-10 pt-8 border-t border-neutral-200 no-print">
        <Link href="/evidence" className="btn btn-ghost">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Evidence
        </Link>
        <Link href="/financial" className="btn btn-secondary">
          Financial Analysis
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Link>
      </nav>
    </div>
  );
}
